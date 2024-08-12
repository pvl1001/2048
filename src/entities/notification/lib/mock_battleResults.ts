import {MatchState} from "shared/common/MatchState";
import {defaultAvatar} from "shared/lib/avatarNames";
import {MatchInfo} from "../../result_card";


let mock_battleResults: MatchInfo = {
    "id": "018b0c92-395a-4e0a-8316-30182659d99f",
    "tournamentId": "tournament2",
    "state": MatchState.FINISHED,
    "currentPlayersCount": 1,
    "maxPlayersCount": 6,
    "seed": 585294235,
    "playersResults": [
        {
            "playerId": 1505,
            "name": "Player 1505",
            "place": 1,
            "score": 0,
            "state": MatchState.FINISHED,
            "rewards": {
                "ID_SOFT_CURRENCY": 60
            },
            "startDateTs": 1695027933,
            "avatarId": defaultAvatar
        }
    ]
};

export default mock_battleResults;