import {RootState} from "app/store";
import {StatusRequest} from "shared/common/StatusRequest";


export class WithdrawSelectors {
    static _banks = (state: RootState) => state.withdraw.banks;
    static _isPending = (state: RootState) => state.withdraw.status === StatusRequest.PENDING;
}
