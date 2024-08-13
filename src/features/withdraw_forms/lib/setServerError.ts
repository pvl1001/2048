import {FormikProps} from "formik";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {Fields} from "./const";
import {TWithdrawValues} from "../types";


export function setServerError(err: unknown, formik?: FormikProps<TWithdrawValues> | null) {
    const error: string = getErrorMessage(err, 'error');
    if (error.includes('Invalid document number')) {
        formik?.setFieldError(Fields.DOCUMENT_ID, 'Invalid document number');
    }
    if (error.includes('Invalid account type')) {
        formik?.setFieldError(Fields.ACCOUNT_TYPE, 'Invalid account type');
    }
    if (error.includes('documentType')) {
        formik?.setFieldError(Fields.DOCUMENT_TYPE, 'Invalid document type');
    }
    if (error.includes('Invalid bank account')) {
        formik?.setFieldError(Fields.BANK_ACCOUNT_NUMBER, 'Invalid bank account number');
        formik?.setFieldError(Fields.BANK_ACCOUNT_PHONE, 'Invalid bank account phone');
        formik?.setFieldError(Fields.BANK_ACCOUNT_USERNAME, 'Invalid bank account username');
        formik?.setFieldError(Fields.BANK_ACCOUNT_CLABE, 'Invalid bank account CLABE');
        formik?.setFieldError(Fields.BANK_ACCOUNT_CCI, 'Invalid bank account CCI');
    }
    if (error.includes('Invalid bank branch')) {
        formik?.setFieldError(Fields.BANK_BRANCH, 'Invalid bank branch');
        formik?.setFieldError(Fields.BANK_BRANCH_IFSC, 'Invalid bank branch IFSC');
        formik?.setFieldError(Fields.BANK_BRANCH_PASSWORD, 'Invalid bank branch password');
    }
}