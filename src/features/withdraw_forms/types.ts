import {FlagId} from "features/auth";
import {CurrencyId} from "shared/api/server_service";
import {TSelectOption} from "shared/ui/select";
import {Fields} from "./lib/const";


export type TWithdrawBankValues = {
    bank: TSelectOption
}

export type TWithdrawValues = {
    [Fields.DOCUMENT_ID]: string
    [Fields.ADDRESS]: string
    [Fields.BANK_ACCOUNT_NUMBER]: string
    [Fields.BANK_ACCOUNT_PHONE]: string
    [Fields.BANK_ACCOUNT_CLABE]: string
    [Fields.BANK_ACCOUNT_CCI]: string
    [Fields.BANK_BRANCH]: string
    [Fields.BANK_BRANCH_IFSC]: string
    [Fields.BANK_BRANCH_PASSWORD]: string
    [Fields.BANK_ACCOUNT_USERNAME]: string
    [Fields.DOCUMENT_TYPE]: TSelectOption
    [Fields.ACCOUNT_TYPE]: TSelectOption
}

export type TValidationRegexParam = {
    regex: RegExp
    error: string
    exception?: Omit<TValidationRegexParam, 'exception'>
}

type TValidationWithOtherCodes = Record<'other' | number, TValidationRegexParam>

export type TDocumentTypesKeys = 'CI' | 'CIE' | 'PASS' | 'NIT' | 'CPF' | 'DL' | 'HC' | 'ID' | 'CC' | 'RUN' | 'RUT' | 'CE' | 'PPT' | 'RUC' | 'CURP' | 'RFC' | 'UID' | 'IFE' | 'CPP' | 'NIK' | 'DNI' | 'PSN' | 'RD' | 'KTP'
type TDocumentTypes = Record<TDocumentTypesKeys, TValidationRegexParam>

export type TValidationCountryParam = {
    account: TValidationWithOtherCodes
    branch?: TValidationWithOtherCodes
    documentType: Partial<TDocumentTypes>
}

export type TValidationParams = Partial<Record<FlagId, TValidationCountryParam>>

export type TWithdrawUnionValues = Record<Fields | 'bankCode', string>

export type TWithdrawPayloadForm = {
    bankCode: string
    documentId: string
    documentType: string
    bankAccount: string
    bankBranch: string
    accountType: string
    address: string
    amount: Partial<CurrencyId>
}

export type WithdrawAmountForm = Record<'amountValue', string>
