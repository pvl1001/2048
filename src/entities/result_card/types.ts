import {CurrencyId, Money, Place} from "shared/api/server_service";
import {MatchState} from "shared/common/MatchState";
import {ProfileChanges, ProfileItem, ProfileMutation, ProfileProperties, TAvatarName} from "shared/model/profile";


export type LeaderBoardResult = PlayerResult | 'searching'

export type TournamentGroup = {
    title: 'Current Tournaments' | 'Completed Tournaments' | 'Incomplete Tournaments',
    matchInfo: MatchInfo[]
}

export type PlayerResult = {
    "playerId": number,
    "name": string,
    "place": Place,
    "state": MatchState,
    "startDateTs": number,
    "score"?: number,
    "avatarId"?: TAvatarName
    "rewards"?: Partial<CurrencyId>,
}

export type MatchInfo = {
    "id": string,
    "tournamentId": string,
    "state": MatchState,
    "currentPlayersCount": number,
    "maxPlayersCount": number,
    "seed": number,
    "playersResults": PlayerResult[]
}

export type PlayMatchResponse = {
    "matchInfo": MatchInfo,
    "profileMutation": ProfileMutation
}

export type FinishMatchResponse = {
    "matchResults": MatchInfo,
    "rewards": {
        "ID_EXP": number
        "ID_LVL": number
    },
    "profileMutation": {
        "revision": number,
        "profileChanges": ProfileChanges[],
        "partialProfile": {
            "revision": number,
            "money": Money & {"ID_EXP": number}
        },
        "profile": {
            "id": string,
            "name": string,
            "money": Money & {"ID_EXP": number},
            "items": ProfileItem[],
            "battlesCount": number,
            "regDate": number,
            "updateDate": number,
            "cantsPayed": number,
            "isTest": boolean,
            "revision": number,
            "properties": ProfileProperties,
            "attributes": object
        }
    }
}
