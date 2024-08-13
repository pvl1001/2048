import {PromotionsSku} from "entities/promotion_card";
import {requestAuth} from "shared/api/Request";
import {CreatePayInResponse} from "./types";


export class Api {
    /** Пополнить игровую валюту */
    static async createPromotionPayIn(sku: PromotionsSku): Promise<string> {
        const res = await requestAuth.post<CreatePayInResponse>('/d24_payin/create_payin', {
            sku,
            amount: 0,
            mutationResponseMask: null
        });
        return res.data.url;
    }
}
