import {AxiosResponse} from "axios";
import {requestAuth} from "shared/api/Request";
import {ProfileServerResponse} from "shared/model/profile";
import {TWithdrawPayloadForm} from "../types";
import {BankCodesResponse} from "./types";


export class Api {
    static async getBankCodes(): Promise<BankCodesResponse> {
        let res: AxiosResponse<BankCodesResponse> = await requestAuth('d24_payout/get_bank_codes');
        return res.data;
    }

    /** Валидация формы перед выводом денег*/
    static async validateForm(data: Omit<TWithdrawPayloadForm, 'address'>): Promise<string> {
        let res: AxiosResponse<string> = await requestAuth.post('d24_payout/validate_bank_account', data);
        return res.data;
    }

    /** Создание запроса на вывод денег */
    static async createPayout(data: TWithdrawPayloadForm): Promise<ProfileServerResponse> {
        /* ST_PAYOUT_STATUS:
        - 1 - заморожен (на проверке);
        - 2 - можно проводить в D24;
        - 3 - деньги переведены;
        - 0/null - не начат; */
        let res: AxiosResponse<ProfileServerResponse> = await requestAuth.post('d24_payout/create_payout', {
            ...data,
            city: "",
            // mutationResponseMask: null
        });
        return res.data;
    }

    /** Продолжить обработку запроса на вывод после того, как он получил аппрув в админке */
    static async processPayout(): Promise<ProfileServerResponse> {
        let res: AxiosResponse<ProfileServerResponse> = await requestAuth.post('profile/process_payout');
        return res.data;
    }
}