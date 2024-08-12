import {Change, ItemChange, Money} from "shared/api/server_service";
import {ProfileItem, ProfileResponse} from "shared/model/profile";


export type RegistrationStep3Response = {
    "revision": number
    "profileChanges": [
        {
            "attributeChanges": Change[],
            "causeId": string,
            "currencyChanges": Money,
            "itemChanges": ItemChange[],
            "propertyChanges": Change[],
            "rewardChanges": number[]
        }
    ],
    "partialProfile": {
        "items": ProfileItem[],
        "money": Money,
        "name": string
        "revision": number
    },
    "profile": ProfileResponse,
}

export type RegistrationDataResponse = {
    "regData": {
        "firstName": string
        "lastName": string
        "birthday": string
        "zipCode": string
        "email": string
    },
    "isRegistered": boolean
    "token": string
}

export type CheckRegDataResponse = {
    "result": "ERROR" | "OK"
    "errors":
        {
            "field": string
            "type": string
        }[]
}