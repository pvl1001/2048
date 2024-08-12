import {CurrencyPromotion} from "shared/api/server_service";
import {ProfileCurrency} from "shared/model/profile";
import {PromotionsSku} from "./lib/consts";


export type Promotion = {
    "sku": PromotionsSku
    "currency": ProfileCurrency
    "centum": number
}

export type PromotionServer = {
    "sku": PromotionsSku
    "currency": CurrencyPromotion
    "centum": number
    "items": unknown[]
    "attributes": Record<string, unknown>
}
