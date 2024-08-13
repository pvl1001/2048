import {useState} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {FormikHelpers} from "formik";
import {registrationActions, RegistrationDataStep1} from "../../model/RegistrationSlice";
import {RegistrationFormValues} from "../../types";
import {LocalErrors} from "../LocalErrors";


export type UseFormRegistrationPhone = {
    onSubmitRegistration: (values: RegistrationFormValues, formik: FormikHelpers<RegistrationFormValues>) => Promise<void>
    onSubmitLogin: (values: RegistrationFormValues, formik: FormikHelpers<RegistrationFormValues>) => Promise<void>
    initialValues: RegistrationFormValues
    isPending: boolean
    step1IsCheck: boolean
}

export function useRegistrationPhone(nextStep: () => void): UseFormRegistrationPhone {
    const dispatch = useAppDispatch();
    const [isPending, setIsPending] = useState(false);
    const step1: RegistrationDataStep1 = useAppSelector(select.registration._step1);
    const {step1IsCheck}: RegistrationDataStep1 = step1;
    const initialValues: RegistrationFormValues = {
        country: step1.country,
        phone: step1.phone,
    };

    async function onSubmitLogin(values: RegistrationFormValues, formik: FormikHelpers<RegistrationFormValues>): Promise<void> {
        dispatch(registrationActions.setPhone(values));
        dispatch(registrationActions.setIsCheck());
        try {
            setIsPending(true);
            const fullNumberPhone: string = values.country.code + values.phone;
            // await Api.login({login: fullNumberPhone});
            nextStep();
        } catch (err) {
            formik.setFieldError('phone', LocalErrors.phone(err));
        } finally {
            setIsPending(false);
        }
    }

    async function onSubmitRegistration(values: RegistrationFormValues, formik: FormikHelpers<RegistrationFormValues>): Promise<void> {
        dispatch(registrationActions.setPhone(values));
        dispatch(registrationActions.setIsCheck());
        try {
            setIsPending(true);
            const fullNumberPhone: string = values.country.code + values.phone;
            // await Api.registerPhone(fullNumberPhone);
            nextStep();
        } catch (err) {
            formik.setFieldError('phone', LocalErrors.phone(err));
        } finally {
            setIsPending(false);
        }
    }

    return {onSubmitRegistration, onSubmitLogin, initialValues, isPending, step1IsCheck};
}
