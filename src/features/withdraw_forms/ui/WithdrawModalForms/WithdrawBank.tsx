import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {Field, Form, Formik} from "formik";
import {RoutePaths} from "shared/common/RoutePaths";
import {TValidationSchema, UseNavigateModal, useNavigateModal, useValidationSchema} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import {Loader} from "shared/ui/loader";
import {Select, TSelectOption} from "shared/ui/select";
import s from "./ModalWithdraw.scss";
import {thunkGetBanks} from "../../model/extraReducer";
import {TWithdrawBankValues} from "../../types";


export const initialValuesWithdrawBank: TWithdrawBankValues = {bank: {title: '', value: ''}};

export function WithdrawBank() {
    const {navigateModal} = useNavigateModal();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const {closeModal}: UseNavigateModal = useNavigateModal();
    const validationSchema: TValidationSchema = useValidationSchema();
    const bankOptions: TSelectOption[] = useAppSelector(select.withdraw._banks);
    const isPending: boolean = useAppSelector(select.withdraw._isPending);

    function onSubmit(values: TWithdrawBankValues) {
        navigateModal(RoutePaths.WITHDRAW_FORM, {...location.state, bankCode: values.bank.value});
    }

    useEffect(() => {
        !bankOptions.length && dispatch(thunkGetBanks());
    }, []);

    if (isPending) {
        return <Loader theme={"modal"}/>;
    }

    return (
        <Formik
            initialValues={initialValuesWithdrawBank}
            onSubmit={onSubmit}
            validationSchema={validationSchema.withdrawBank}
        >
            {formik =>
                <Form className={s._}>
                    <p className={s.block_description}>
                        Choose a bank for withdrawal:
                    </p>

                    <Field
                        as={Select}
                        withSearch
                        name={'bank'}
                        options={bankOptions}
                        label={'Bank name'}
                        placeholder={'Choose a bank name'}
                        setFieldValue={formik.setFieldValue}
                        error={formik.touched.bank && formik.errors.bank}
                    />

                    <div className={s.buttons}>
                        <Button theme={'blue'} onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button
                            type={'submit'}
                            theme={'orange'}
                            disabled={!(formik.isValid && formik.dirty)}
                        >Confirm</Button>
                    </div>
                </Form>
            }
        </Formik>
    );
}