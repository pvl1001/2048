import {PromotionsSku} from "./consts";


export type PromotionData = {
    id: 'starter' | 'rookie' | 'extended' | 'ultimate'
}

export function getPromotionCardData(sku: PromotionsSku): PromotionData {
    switch (sku) {
        case PromotionsSku.SKU_5:
            return {id: 'starter'};
        case PromotionsSku.SKU_15:
            return {id: 'rookie'};
        case PromotionsSku.SKU_25:
            return {id: 'extended'};
        case PromotionsSku.SKU_35:
            return {id: 'ultimate'};
    }
}