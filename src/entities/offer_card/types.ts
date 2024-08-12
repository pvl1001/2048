import {CurrencyId} from "shared/api/server_service";
import {RoutePaths} from "shared/common/RoutePaths";
import {OfferId} from "shared/model/global_config";
import {ProfileCurrency} from "shared/model/profile";
import {BigModalTitles} from "shared/ui/big_modal";


export type OffersDataKeys =
    | RoutePaths.SPECIAL_OFFER
    | RoutePaths.FOR_YOU_OFFER
    | RoutePaths.HAPPY_OFFER
    | RoutePaths.LUCKY_OFFER

export type OffersDataValue = {
    title: BigModalTitles,
    description: string,
    containerClass: string
}

export type OffersData = Record<OffersDataKeys, OffersDataValue>

export type OffersResponse = {
    "offers": OfferResponse[]
    "nextUpdateTs": number
    "nextUpdateSecondsLeft": number
}

export type OfferResponse = {
    "deadlineSecondsLeft": number
    "deadlineTs": number
    "discount": number
    "id": OfferId
    "maxShowCount": number
    "maxUsageCount": number
    "price": {
        "CENTS": number
    },
    "rewards": [
        {
            "currency": CurrencyId,
            "items": string[]
        }
    ],
    "shopPositionId": string
    "sku": string
    "state": {
        "showCount": number
        "usageCount": number
    }
}

export type OfferReward = {
    "currency": ProfileCurrency,
    "items": string[]
}

export type TOffers = Record<OffersDataKeys, Offer>

export type Offer = OffersDataValue & Omit<OfferResponse, 'rewards' | 'price'> & {
    "price": {hard: number}
    "rewards": OfferReward[]
}
