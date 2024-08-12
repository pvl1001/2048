import {RootState} from "app/store";
import {StatusRequest} from "shared/common/StatusRequest";


export class RegistrationSelectors {
    static _step1 = (state: RootState) => state.registration.data.step1;
    static _step3 = (state: RootState) => state.registration.data.step3;
    static _step = (state: RootState) => state.registration.step;
    static _isPending = (state: RootState) => state.registration.status === StatusRequest.PENDING;
}
