import {ProfileAdapter} from "shared/model/profile";
import {Promotion, PromotionServer} from "../types";


export class PromotionsAdapter {
    static getPromotions(promotions: PromotionServer[]): Promotion[] {
        return promotions.map(p => {
            return {
                sku: p.sku,
                centum: p.centum,
                currency: ProfileAdapter.getCurrency(p.currency)
            };
        });
    }
}
