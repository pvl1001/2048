import {Money} from "shared/api/server_service";
import {ProfileCurrency} from "./api/adapter";


type ProfilePropertiesKeys =
    | "bDay"
    | "email"
    | "phone"
    | "zipCode"
    | "lastName"
    | "firstName"
    | "referralCode"
    | "ST_D24_PAYOUT_ID"
    | "registrationCountryCode"

export type ProfileChange = {
    "causeId"?: string,
    "currencyChanges": Money
}

export type ProfileChanges = ProfileChange | RewardChanges

export type ProfileItem = {
    "id": string,
    "typeId": string,
    "count": number,
    "linkId": null | string,
    "attributes": object,
    "plain": boolean
}

export type RewardChanges = {
    rewardChanges: number[]
}

export type ProfileMutation = {
    "revision": number,
    "profileChanges": ProfileChanges[],
    "partialProfile": {
        "revision": number,
        "money": Money,
        "profile": ProfileResponse
    },
    profile?: ProfileResponse
}

export type TAvatarName =
    | 'Chang'
    | 'Milana'
    | 'Chonguk'
    | 'Tim'
    | 'Fred'
    | 'Bamby'
    | 'Wendy'
    | 'Rubi'

export type ProfileProperties = Record<ProfilePropertiesKeys, string>

export type ProfileResponse = {
    "id": string,
    "name": string,
    "money": Money,
    "items": ProfileItem[],
    "battlesCount": number,
    "regDate": number,
    "updateDate": number,
    "cantsPayed": number,
    "revision": number,
    "properties": ProfileProperties,
    "attributes": {
        "avatar-id": TAvatarName
        "level": string
    }
    "isTest": boolean,
    "deals": {
        delayedLevelRewards: Array<{
            level: number
            rewards: Money
        }>
    }
}

export type ChangeNameResponse = ProfileMutation & {
    "profile": ProfileResponse
}

export type Profile = {
    "id": string
    "name": string
    "money": Partial<Money>
    "properties": ProfileProperties
    "hasLevelUp": boolean
    "avatarId": TAvatarName
    "dailyRewards": ProfileDailyRewards
    "levelRewards": number[]
    "level": number
    currency: ProfileCurrency
    exp: number
    // "attributes": Record<string, any>
    // "battlesCount": number
    // "regDate": number
    // "updateDate": number
    // "cantsPayed": number
    // "revision": number
}

export type ProfileDailyRewards = {
    loginDay: number
    currentReward: number
    rewardDays: Record<number, number> | null
}

export type ProfileServerResponse = {
    "profileChanges": ProfileChanges[]
    "partialProfile": Record<string, unknown>
    "profile": ProfileResponse
}

export type CreateProfileResponse = {
    "secretKey": string
    "profile": ProfileResponse
    "serverTimestamp": number
}
