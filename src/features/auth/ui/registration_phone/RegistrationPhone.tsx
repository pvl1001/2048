import {ChangeEvent} from "react";
import {Field, Form, Formik, FormikHelpers, FormikProps} from "formik";
import {TValidationSchema, useValidationSchema} from "shared/lib/hooks";
import {Mask} from "shared/lib/Mask";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import s from './RegistrationPhone.scss';
import FieldSelectOptions from "../../lib/fieldSelectOptions";
import {UseFormRegistrationPhone, useRegistrationPhone} from "../../lib/hooks/useRegistrationPhone";
import {RegistrationFormValues} from "../../types";
import WithHaveAccount from "../with_have_account/WithHaveAccount";


type RegistrationPhoneProps = {
    nextStep: () => void
    title: string
    onSubmit: (values: RegistrationFormValues, formik: FormikHelpers<RegistrationFormValues>) => Promise<void>
    isPending: boolean
    isHaveAccount?: boolean
}

export function RegistrationPhone({nextStep, title, onSubmit, isHaveAccount, isPending}: RegistrationPhoneProps) {
    const {initialValues, step1IsCheck}: UseFormRegistrationPhone = useRegistrationPhone(nextStep);
    const ValidationSchema: TValidationSchema = useValidationSchema();

    function toggleFocus(): void {
        document.getElementsByName('phone')[0].focus();
    }

    return (
        <>
            <h3 className={s.title}>{title}</h3>

            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema.registrationPhone}
                onSubmit={onSubmit}
            >{(formik: FormikProps<RegistrationFormValues>) => {
                const error: string =
                    ((formik.errors.country?.title && !formik.errors.phone && formik.touched.phone)
                    || (formik.errors.phone && formik.touched.phone)
                        ? (formik.errors.country?.title || formik.errors.phone)
                        : '') ?? '';
                return <Form>
                    <fieldset>
                        <Field
                            as={Select}
                            withSearch
                            label={'Country'}
                            name={'country'}
                            placeholder={'Choose country'}
                            options={FieldSelectOptions.countries}
                            setFieldValue={formik.setFieldValue}
                            toggleFocus={toggleFocus}
                        />
                        <Field
                            as={Input}
                            code={formik.values.country.code}
                            label={'Mobile phone number'}
                            name={'phone'}
                            value={formik.values.phone}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => formik.setFieldValue('phone', Mask.number(e.target.value))}
                            maxLength={10}
                            error={error}
                        />
                    </fieldset>

                    <WithHaveAccount isHaveAccount={isHaveAccount}>
                        <Button
                            type={'submit'}
                            isPending={isPending}
                            disabled={!((formik.dirty || step1IsCheck) && formik.isValid)}
                        >Send code</Button>
                    </WithHaveAccount>
                </Form>;
            }}
            </Formik>

        </>
    );
}
