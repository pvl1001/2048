import {select, useAppDispatch, useAppSelector} from "app/store";
import {FormikProps} from "formik";
import {RefObject, useState} from "react";
import {useLocation} from "react-router-dom";
import {TWithdrawFormConfig} from "shared/api/adapters";
import {CurrencyId} from "shared/api/server_service";
import {RoutePaths} from "shared/common/RoutePaths";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {getFormWithSelect} from "shared/lib/getFormWithSelect";
import {useNavigateModal} from "shared/lib/hooks";
import {thunkCreatePayout} from "shared/model/profile";
import {Api} from "../api/Api";
import {TWithdrawPayloadForm, TWithdrawUnionValues, TWithdrawValues} from "../types";
import {Fields} from "./const";
import {setServerError} from "./setServerError";


export type UseWithdrawForm = {
    documentTypes: string[]
    accountTypes: string[]
    initialValues: TWithdrawValues
    isPending: boolean
    onSubmit: (values: TWithdrawValues) => Promise<void>
    withdrawFormConfig: TWithdrawFormConfig
}

export function useWithdrawForm(formikRef: RefObject<FormikProps<TWithdrawValues>>) {
    let dispatch = useAppDispatch();
    let location = useLocation();
    let {navigateModal, navigateModalError} = useNavigateModal();
    let [isPending, setIsPending] = useState(false);
    let withdrawFormConfig: TWithdrawFormConfig = useAppSelector(select.profile._withdrawFormConfig(location.state.bankCode));
    let serverFields: Fields[] = withdrawFormConfig.FormFields.split(',') as Fields[];
    let documentTypes: string[] = withdrawFormConfig.DocumentTypeValues.split(',');
    let accountTypes: string[] = withdrawFormConfig.AccountTypeValues.split(',');
    let initialValues: TWithdrawValues = serverFields.reduce((acc, el) => {
        let select = {title: '', value: ''};
        let input = '';
        return {
            ...acc,
            [el]: [Fields.ACCOUNT_TYPE, Fields.DOCUMENT_TYPE].includes(el) ? select : input
        };
    }, {} as TWithdrawValues);

    async function onSubmit(values: TWithdrawValues) {
        let bankCode: number = location.state.bankCode;
        let amount: CurrencyId = location.state.amount;
        let formData: Omit<TWithdrawUnionValues, 'amount'> = getFormWithSelect({
            ...values, bankCode
        });
        let data: Omit<TWithdrawPayloadForm, 'address'> = {
            "bankCode": formData.bankCode ?? '',
            "documentId": formData.DocumentId ?? '',
            "documentType": formData.DocumentType ?? '',
            "bankAccount": (formData.BankAccountCCI || formData.BankAccountNumber || formData.BankAccountCLABE || formData.BankAccountPhone || formData.BankAccountUsername) ?? '',
            "bankBranch": (formData.BankBranch || formData.BankBranchIFSC || formData.BankBranchPassword) ?? '',
            "accountType": formData.AccountType ?? '',
            "amount": amount ?? {ID_HARD_CURRENCY: 0},
        };
        try {
            setIsPending(true);
            // data.AccountType = '1';
            await Api.validateForm(data);
            await dispatch(thunkCreatePayout({...data, address: formData.Address ?? ''})).unwrap();
            navigateModal(RoutePaths.SUCCESS, {
                message: 'Your withdrawal has been successfully completed',
                isWithdrawFinish: true
            });
        } catch (err: unknown) {
            let message = getErrorMessage(err);
            if (message.includes('Failed to convert')) {
                navigateModalError(err);
            }
            setServerError(err, formikRef.current);
        } finally {
            setIsPending(false);
        }
    }

    return {
        documentTypes,
        accountTypes,
        initialValues,
        isPending,
        onSubmit,
        withdrawFormConfig,
    };
}
