import {CurrencyId, Place} from "shared/api/server_service";
import {MatchState} from "shared/common/MatchState";


export type Tournament = {
    "id": string,
    "numberOfParticipants": number,
    "rewards": Reward[],
    "entryFee": Partial<CurrencyId>,
    "fromTimeStamp": number,
    "untilTimeStamp": number | null,
    "state": MatchState
    durationTime?: number
}

export type Reward = {
    "place": Place,
    "currency": Partial<CurrencyId>
}
