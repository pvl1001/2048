import cn from "classnames";
import {FlagId} from "features/auth";
import {Field, Form, Formik, FormikProps} from "formik";
import {useRef, useState} from "react";
import {TValidationSchema, useNavigateModal, useValidationSchema} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {Select, TSelectOption} from "shared/ui/select";
import {Fields} from "../../lib/const";
import {UseWithdrawForm, useWithdrawForm} from "../../lib/useWithdrawForm";
import {validationParams} from "../../lib/validationParams";
import {WithdrawSelects} from "../../lib/WithdrawSelects";
import {TDocumentTypesKeys, TValidationRegexParam, TWithdrawValues} from "../../types";
import s from "./ModalWithdraw.module.scss";


export function WithdrawForm() {
    const formikRef = useRef<FormikProps<TWithdrawValues>>(null);
    const {closeModal} = useNavigateModal();
    const validationSchema: TValidationSchema = useValidationSchema();
    const [documentValidate, setDocumentValidate] = useState<TValidationRegexParam>({regex: /^.+$/, error: ''});
    const {initialValues, onSubmit, withdrawFormConfig, documentTypes, accountTypes, isPending}: UseWithdrawForm = useWithdrawForm(formikRef);

    return (
        <Formik
            innerRef={formikRef}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema.withdrawForm(withdrawFormConfig, documentValidate)}
        >
            {formik => {
                const setError = (fieldName: Fields) => {
                    if (formik.touched[fieldName]) {
                        if ((formik.errors[fieldName] as TSelectOption)?.value) {
                            return (formik.errors[fieldName] as TSelectOption)?.value;
                        }
                        return formik.errors[fieldName];
                    }
                    return '';
                };

                return <Form className={cn(s._, s._form)}>
                    <p className={s.description}>Please fill the fields</p>
                    <fieldset>
                        {withdrawFormConfig.FormFields.includes(Fields.ACCOUNT_TYPE) && <Field
                            as={Select}
                            withTooltipError
                            name={Fields.ACCOUNT_TYPE}
                            options={WithdrawSelects.accountType(accountTypes)}
                            label={'Account type'}
                            placeholder={'Choose type'}
                            setFieldValue={formik.setFieldValue}
                            error={setError(Fields.ACCOUNT_TYPE)}
                        />}


                        {withdrawFormConfig.FormFields.includes(Fields.BANK_ACCOUNT_NUMBER) && <Field
                            as={Input}
                            name={Fields.BANK_ACCOUNT_NUMBER}
                            label={'Bank account number'}
                            error={setError(Fields.BANK_ACCOUNT_NUMBER)}
                        />}
                        {withdrawFormConfig.FormFields.includes(Fields.BANK_ACCOUNT_PHONE) && <Field
                            as={Input}
                            name={Fields.BANK_ACCOUNT_PHONE}
                            label={'Bank account phone'}
                            error={setError(Fields.BANK_ACCOUNT_PHONE)}
                        />}
                        {withdrawFormConfig.FormFields.includes(Fields.BANK_ACCOUNT_CLABE) && <Field
                            as={Input}
                            name={Fields.BANK_ACCOUNT_CLABE}
                            label={'Bank account CLABE'}
                            error={setError(Fields.BANK_ACCOUNT_CLABE)}
                        />}
                        {withdrawFormConfig.FormFields.includes(Fields.BANK_ACCOUNT_CCI) && <Field
                            as={Input}
                            name={Fields.BANK_ACCOUNT_CCI}
                            label={'Bank account CCI'}
                            error={setError(Fields.BANK_ACCOUNT_CCI)}
                        />}
                        {withdrawFormConfig.FormFields.includes(Fields.BANK_ACCOUNT_USERNAME) && <Field
                            as={Input}
                            name={Fields.BANK_ACCOUNT_USERNAME}
                            label={'Bank account username'}
                            error={setError(Fields.BANK_ACCOUNT_USERNAME)}
                        />}


                        {withdrawFormConfig.FormFields.includes(Fields.BANK_BRANCH) && <Field
                            as={Input}
                            name={Fields.BANK_BRANCH}
                            label={'Bank branch'}
                            placeholder={'Bank branch'}
                            error={setError(Fields.BANK_BRANCH)}
                        />}
                        {withdrawFormConfig.FormFields.includes(Fields.BANK_BRANCH_IFSC) && <Field
                            as={Input}
                            name={Fields.BANK_BRANCH_IFSC}
                            label={'Bank branch IFSC'}
                            placeholder={'Bank branch IFSC'}
                            error={setError(Fields.BANK_BRANCH_IFSC)}
                        />}
                        {withdrawFormConfig.FormFields.includes(Fields.BANK_BRANCH_PASSWORD) && <Field
                            as={Input}
                            name={Fields.BANK_BRANCH_PASSWORD}
                            label={'Bank branch password'}
                            placeholder={'Bank branch password'}
                            error={setError(Fields.BANK_BRANCH_PASSWORD)}
                        />}


                        {withdrawFormConfig.FormFields.includes(Fields.DOCUMENT_TYPE) && <Field
                            as={Select}
                            withTooltipError
                            name={Fields.DOCUMENT_TYPE}
                            options={WithdrawSelects.documentType(documentTypes)}
                            label={'Document type'}
                            placeholder={'Choose type'}
                            setFieldValue={formik.setFieldValue}
                            error={setError(Fields.DOCUMENT_TYPE)}
                            onChangeHandler={({value}: TSelectOption) =>
                                setDocumentValidate(validationParams[withdrawFormConfig.CountryCode as FlagId]?.documentType[value as TDocumentTypesKeys] ?? documentValidate)
                            }
                            afterChange={() => formik.values[Fields.DOCUMENT_ID] && formik.setFieldTouched(Fields.DOCUMENT_ID)}
                        />}


                        <Field
                            as={Input}
                            name={Fields.DOCUMENT_ID}
                            label={'Document ID'}
                            placeholder={' '}
                            error={setError(Fields.DOCUMENT_ID)}
                        />


                        {withdrawFormConfig.FormFields.includes(Fields.ADDRESS) && <Field
                            as={Input}
                            name={Fields.ADDRESS}
                            label={'Address'}
                            error={setError(Fields.ADDRESS)}
                        />}
                    </fieldset>

                    <div className={s.buttons}>
                        <Button theme={'blue'} onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button
                            type={'submit'}
                            theme={'orange'}
                            isPending={isPending}
                            disabled={!(formik.isValid && formik.dirty)}
                        >Confirm</Button>
                    </div>
                </Form>;
            }}
        </Formik>
    );
}