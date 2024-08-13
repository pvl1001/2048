import dayjs from "dayjs";
import {Cause} from "./const";
import {Transaction} from "../types";


export const mockHistoryResponse: {data: Transaction[]} = {
    data: [
        {
            "playerId": 1634,
            "cause": Cause.INAPP_DEPOSIT,
            "deltas": {
                ID_BONUS_CURRENCY: 100, ID_HARD_CURRENCY: 100
            },
            "created": dayjs().unix()
        },
        {
            "playerId": 1634,
            "cause": Cause.INAPP_WITHDRAW,
            "deltas": {
                ID_BONUS_CURRENCY: 0, ID_HARD_CURRENCY: -2000
            },
            "created": dayjs().unix()
        },
        {
            "playerId": 1634,
            "cause": Cause.INAPP_DEPOSIT,
            "deltas": {
                ID_BONUS_CURRENCY: 100, ID_HARD_CURRENCY: 100
            },
            "created": dayjs().unix()
        },
        {
            "playerId": 1634,
            "cause": Cause.INAPP_DEPOSIT,
            "deltas": {
                ID_BONUS_CURRENCY: 900, ID_HARD_CURRENCY: 100
            },
            "created": dayjs().unix()
        },
        {
            "playerId": 1634,
            "cause": Cause.INAPP_DEPOSIT,
            "deltas": {
                ID_BONUS_CURRENCY: 600, ID_HARD_CURRENCY: 100
            },
            "created": dayjs().unix()
        },
        {
            "playerId": 1634,
            "cause": Cause.INAPP_WITHDRAW,
            "deltas": {
                ID_BONUS_CURRENCY: 0, ID_HARD_CURRENCY: -1000
            },
            "created": dayjs().unix()
        },
        {
            "playerId": 1634,
            "cause": Cause.INAPP_WITHDRAW,
            "deltas": {
                ID_BONUS_CURRENCY: 0, ID_HARD_CURRENCY: -200
            },
            "created": dayjs().unix()
        },
        {
            "playerId": 1634,
            "cause": Cause.INAPP_DEPOSIT,
            "deltas": {
                ID_BONUS_CURRENCY: 60, ID_HARD_CURRENCY: 100
            },
            "created": dayjs().unix()
        },
        {
            "playerId": 1634,
            "cause": Cause.INAPP_DEPOSIT,
            "deltas": {
                ID_BONUS_CURRENCY: 600, ID_HARD_CURRENCY: 100
            },
            "created": dayjs().unix()
        },
    ]
};