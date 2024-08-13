import {PromotionsAdapter} from "./adapter";
import {mockPromotionsResponse} from "../lib/mockPromotions";
import {Promotion} from "../types";


export class PromotionsApi {
    /** Получить карточки с акциями */
    static async getPromotions(): Promise<Promotion[]> {
        // let res: AxiosResponse<PromotionServer[]> = await requestAuth.post('inapps/positions');
        const res = mockPromotionsResponse;
        return PromotionsAdapter.getPromotions(res.data);
    }
}