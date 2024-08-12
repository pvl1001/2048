import {CurrencyId} from "shared/api/server_service";
import {Cause} from "./lib/const";


export type Transaction = {
    "playerId": number,
    "cause": Cause,
    "deltas": Omit<CurrencyId, 'ID_SOFT_CURRENCY'>,
    "created": number
}