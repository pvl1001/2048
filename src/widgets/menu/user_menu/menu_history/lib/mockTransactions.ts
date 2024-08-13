import {Cause, Transaction} from "entities/history_card";


const mockTransactions: Transaction[] = [
    {
        "playerId": 907,
        "cause": Cause.INAPP_DEPOSIT,
        "deltas": {
            "ID_HARD_CURRENCY": 300,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692697396
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_WITHDRAW,
        "deltas": {
            "ID_HARD_CURRENCY": -100,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692697371
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_WITHDRAW,
        "deltas": {
            "ID_HARD_CURRENCY": -100,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692697367
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_DEPOSIT,
        "deltas": {
            "ID_HARD_CURRENCY": 900,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692697243
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_WITHDRAW,
        "deltas": {
            "ID_HARD_CURRENCY": -100,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692697101
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_DEPOSIT,
        "deltas": {
            "ID_HARD_CURRENCY": 100,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692692489
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_WITHDRAW,
        "deltas": {
            "ID_HARD_CURRENCY": -100,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692692222
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_WITHDRAW,
        "deltas": {
            "ID_HARD_CURRENCY": -100,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692692209
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_WITHDRAW,
        "deltas": {
            "ID_HARD_CURRENCY": -100,
            "ID_BONUS_CURRENCY": 99
        },
        "created": 1692692019
    },
    {
        "playerId": 907,
        "cause": Cause.INAPP_WITHDRAW,
        "deltas": {
            "ID_HARD_CURRENCY": -100,
            "ID_BONUS_CURRENCY": 0
        },
        "created": 1692689300
    }
];

export default mockTransactions;