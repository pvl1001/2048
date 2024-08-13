import {useRef, useState} from "react";
import {useAppDispatch} from "app/store";
import {FormikProps} from "formik";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {registrationActions, RegistrationDataStep3} from "../../model/RegistrationSlice";
import {RegistrationPayloadStep3, UseRegistrationStep3} from "../../types";
import {FieldErrors, RegisterFields} from "../consts";
import {isServerErrors} from "../isServerErrors";


function UseRegistrationStep3(nextStep: () => void): UseRegistrationStep3 {
    const dispatch = useAppDispatch();
    const refFormik = useRef<FormikProps<RegistrationDataStep3>>(null);
    const [isPending, setIsPending] = useState(false);

    async function onSubmit(data: RegistrationDataStep3): Promise<void> {
        const payload: RegistrationPayloadStep3 = {
            ...data,
            birthDay: +data.birthDay.value,
            birthMonth: +data.birthMonth.value,
            birthYear: +data.birthYear.value,
        };

        try {
            setIsPending(true);
            // await Api.registerAccount(payload);
            dispatch(registrationActions.setRegistrationForm(data));
            nextStep();
        } catch (err) {
            if (isServerErrors(err)) { // записать ошибки от сервера
                return err.forEach(error => {
                    const key = error.field;
                    refFormik.current?.setFieldError(
                        RegisterFields[key],
                        FieldErrors[RegisterFields[key]]?.(getErrorMessage(error.type))
                    );
                });
            }
            refFormik.current?.setFieldError( // email ошибки
                RegisterFields.EMAIL,
                FieldErrors[RegisterFields.EMAIL]?.(getErrorMessage(err))
            );
        } finally {
            setIsPending(false);
        }
    }

    return {
        onSubmit,
        isPending,
        refFormik
    };
}

export default UseRegistrationStep3;