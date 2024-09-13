import {ChangeEvent} from "react";
import {select, useAppSelector} from "app/store";
import {Field, Form, Formik, FormikProps} from "formik";
import {TValidationSchema, useValidationSchema} from "shared/lib/hooks";
import {Mask} from "shared/lib/Mask";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {Select, TSelectOption} from "shared/ui/select";
import s from "./RegistrationStep3.module.scss";
import {RegisterFields} from "../../lib/consts";
import FieldSelectOptions from "../../lib/fieldSelectOptions";
import useRegistrationStep3 from "../../lib/hooks/useRegistrationStep3";
import {RegistrationDataStep3} from "../../model/RegistrationSlice";
import {RegistrationStep3Props, UseRegistrationStep3} from "../../types";
import WithHaveAccount from "../with_have_account/WithHaveAccount";


export function RegistrationStep3({nextStep}: RegistrationStep3Props) {
    const {refFormik, isPending, onSubmit}: UseRegistrationStep3 = useRegistrationStep3(nextStep);
    const initialValues: RegistrationDataStep3 = useAppSelector(select.registration._step3);
    const ValidationSchema: TValidationSchema = useValidationSchema();

    return (
        <div className={s._}>
            <h2 className={s.title}>Please fill in the registration form:</h2>

            <Formik<RegistrationDataStep3>
                innerRef={refFormik}
                initialValues={initialValues}
                validationSchema={ValidationSchema.registrationStep3}
                onSubmit={onSubmit}>
                {(formik: FormikProps<RegistrationDataStep3>) => {
                    const inputError = (key: keyof RegistrationDataStep3) => formik.errors[key] && formik.touched[key]
                        ? formik.errors[key] : null;
                    const selectError = (key: keyof RegistrationDataStep3) => (formik.errors[key] as TSelectOption)?.value && formik.touched[key]
                        ? (formik.errors[key] as TSelectOption)?.value : null;

                    return <Form>
                        <fieldset>
                            <div className={s.name}>
                                <Field
                                    as={Input}
                                    name={RegisterFields.FIRST_NAME}
                                    label="First name"
                                    placeholder="Ivan"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => formik.setFieldValue(RegisterFields.FIRST_NAME, Mask.fieldName(e.target.value))}
                                    error={inputError(RegisterFields.FIRST_NAME)}
                                />
                                <Field
                                    as={Input}
                                    name={RegisterFields.LAST_NAME}
                                    label="Last name"
                                    placeholder="Ivan"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => formik.setFieldValue(RegisterFields.LAST_NAME, Mask.fieldName(e.target.value))}
                                    error={inputError(RegisterFields.LAST_NAME)}
                                />
                            </div>

                            <div className={s.birthday}>
                                <Field
                                    as={Select}
                                    withTooltipError
                                    name={RegisterFields.DAY}
                                    label="Birthday"
                                    placeholder="Day"
                                    options={FieldSelectOptions.days}
                                    currentOption={formik.values[RegisterFields.DAY]}
                                    setFieldValue={formik.setFieldValue}
                                    error={selectError(RegisterFields.DAY)}
                                />
                                <Field
                                    as={Select}
                                    withTooltipError
                                    name={RegisterFields.MONTH}
                                    placeholder="Month"
                                    options={FieldSelectOptions.mounths}
                                    currentOption={formik.values[RegisterFields.MONTH]}
                                    setFieldValue={formik.setFieldValue}
                                    error={selectError(RegisterFields.MONTH)}
                                />
                                <Field
                                    as={Select}
                                    withTooltipError
                                    name={RegisterFields.YEAR}
                                    placeholder="Year"
                                    options={FieldSelectOptions.years}
                                    currentOption={formik.values[RegisterFields.YEAR]}
                                    setFieldValue={formik.setFieldValue}
                                    error={selectError(RegisterFields.YEAR)}
                                />
                            </div>

                            <Field
                                as={Input}
                                name={RegisterFields.EMAIL}
                                label="E-mail"
                                placeholder="Ivan@ya.ru"
                                error={inputError(RegisterFields.EMAIL)}
                            />
                            <Field
                                as={Input}
                                name={RegisterFields.ZIP_CODE}
                                label="ZIP/Postal code"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => formik.setFieldValue(RegisterFields.ZIP_CODE, Mask.number(e.target.value))}
                                maxLength={16}
                                error={inputError(RegisterFields.ZIP_CODE)}
                            />
                            <Field
                                as={Input}
                                name={RegisterFields.INVITE_CODE}
                                label="Referal code (optional)"
                                className={s.referal_code}
                                error={inputError(RegisterFields.INVITE_CODE)}
                            />
                        </fieldset>

                        <WithHaveAccount isHaveAccount>
                            <Button
                                type={'submit'}
                                isPending={isPending}
                                disabled={!(formik.isValid && formik.dirty)}
                            >Registration</Button>
                        </WithHaveAccount>
                    </Form>;
                }}
            </Formik>
        </div>
    );
}
