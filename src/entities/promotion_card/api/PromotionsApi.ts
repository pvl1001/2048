import {mockPromotionsResponse} from "../lib/mockPromotions";
import {Promotion} from "../types";
import {PromotionsAdapter} from "./adapter";


export class PromotionsApi {
    /** Получить карточки с акциями */
    static async getPromotions(): Promise<Promotion[]> {
        // let res: AxiosResponse<PromotionServer[]> = await requestAuth.post('inapps/positions');
        let res = mockPromotionsResponse;
        return PromotionsAdapter.getPromotions(res.data);
    }
}