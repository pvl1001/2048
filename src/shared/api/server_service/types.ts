import {ProfileMutation} from "shared/model/profile";


export type ResponseError = Record<'error' | 'exception', string>

export type CurrencyId = Record<"ID_BONUS_CURRENCY" | "ID_HARD_CURRENCY" | "ID_SOFT_CURRENCY", number>

export type CurrencyPromotion = CurrencyId & {ID_EXP: number}

type MoneyKeys =
    | 'ID_EXP' // опыт
    | 'ID_LVL' // уровень
    | 'ID_MMR'
    | 'ID_ADS_TOKEN'
    | 'ID_LOGIN_DAYS' // дней подряд заходил
    | 'ID_HARD_CURRENCY' // наличные
    | 'ID_SOFT_CURRENCY' // монеты
    | 'ID_BONUS_CURRENCY' // бонусы
    | 'ID_REGISTERED'
    | 'ID_DAILY_GIFT_TKN' // ежедневный подарок
    | 'ID_INVITE_REWARDS_COUNT'
    | 'REG_START_TS'
    | 'TKN_REWARD_DAY1' // награда за день
    | 'TKN_REWARD_DAY2'
    | 'ST_BATTLES_COUNT'
    | 'ST_TOTAL_HARD_SPENT'
    | 'ST_WIN_BATTLES_COUNT'
    | 'ST_PAYOUT_STATUS' // статус вывода валюты

export type Place = number

export type Money = Record<MoneyKeys, number>

export type BlockTimerPayload = {
    storageName: string
    sec: number
    phone: string
}

export type Change = {
    name: string
    value: string
}

export type ItemChange = {
    "action": string
    "dst": {
        "itemId": string
        "slotId": number
    },
    "src": {
        "itemId": string
        "slotId": number
    },
    "target": {
        "attributes": Object,
        "count": number
        "id": string
        "linkId": string
        "plain": boolean
        "typeId": string
    }
}

export type ClaimReward = {
    "rewardId": number
    "cause": string
    "currency": CurrencyId
    "items": Record<string, unknown>
    "attributes": Record<string, unknown>
}

export type UnclaimedResponse = ClaimReward[]

export type ClaimResponse = {
    "rewards": ClaimReward[],
    "profileMutation": Required<ProfileMutation>
}

export type ClaimPayload = {
    rewardIds: number[]
} | {
    "causes": string[]
    "mutationResponseMask": string
}
