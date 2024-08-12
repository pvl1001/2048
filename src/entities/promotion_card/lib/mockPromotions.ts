import {PromotionServer} from "../types";
import {PromotionsSku} from "./consts";


export let mockPromotionsResponse: {data: PromotionServer[]} = {
    data: [
        {
            "sku": PromotionsSku.SKU_5,
            "currency": {
                "ID_BONUS_CURRENCY": 0, "ID_HARD_CURRENCY": 500, "ID_SOFT_CURRENCY": 0, "ID_EXP": 0,
            },
            "centum": 500,
            "items": [],
            "attributes": {},
        },
        {
            "sku": PromotionsSku.SKU_15,
            "currency": {
                "ID_BONUS_CURRENCY": 100, "ID_HARD_CURRENCY": 1500, "ID_SOFT_CURRENCY": 0, "ID_EXP": 0,
            },
            "centum": 1500,
            "items": [],
            "attributes": {},
        },
        {
            "sku": PromotionsSku.SKU_25,
            "currency": {
                "ID_BONUS_CURRENCY": 200, "ID_HARD_CURRENCY": 2500, "ID_SOFT_CURRENCY": 0, "ID_EXP": 0,
            },
            "centum": 2500,
            "items": [],
            "attributes": {},
        },
        {
            "sku": PromotionsSku.SKU_35,
            "currency": {
                "ID_BONUS_CURRENCY": 300, "ID_HARD_CURRENCY": 3500, "ID_SOFT_CURRENCY": 0, "ID_EXP": 0,
            },
            "centum": 3500,
            "items": [],
            "attributes": {},
        },
    ]
};