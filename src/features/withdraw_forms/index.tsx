export {withdrawReducer} from './model/withdrawSlice';
export {WithdrawSelectors} from './model/WithdrawSelectors';
export {thunkGetBanks} from './model/extraReducer';
export {Api} from './api/Api';
export {Fields} from './lib/const';
export {validationParams} from './lib/validationParams';
export {TWithdrawPayloadForm, TValidationCountryParam, TValidationRegexParam, TWithdrawBankValues, TWithdrawValues} from './types';

export {WithdrawAmountForm} from './ui/WithdrawAmountForm/WithdrawAmountForm';
import {WithdrawBank} from "./ui/WithdrawModalForms/WithdrawBank";
import {WithdrawForm} from "./ui/WithdrawModalForms/WithdrawForm";


export let ModalWithdraw = {
    Bank: WithdrawBank,
    Form: WithdrawForm,
};
