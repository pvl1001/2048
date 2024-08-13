import {MatchInfo} from "entities/result_card";
import {MatchState} from "shared/common/MatchState";


const mock_match_history: MatchInfo[] = [
    {
        "id": "0c3233c6-9262-4723-93e9-4a41f990a59e",
        "tournamentId": "tournament2",
        "state": MatchState.ONGOING,
        "currentPlayersCount": 1,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 16138,
                "state": MatchState.FINISHED,
                "rewards":
                    {
                        "ID_SOFT_CURRENCY": 60
                    },
                "startDateTs": 1692259847
            }
        ],
        "seed": 868046485
    },
    {
        "id": "2d346f30-d625-4550-8880-3c307835402a",
        "tournamentId": "tournament2",
        "state": MatchState.ONGOING,
        "currentPlayersCount": 1,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 72,
                "state": MatchState.FINISHED,
                "rewards":
                    {
                        "ID_SOFT_CURRENCY": 60
                    },
                "startDateTs": 1692259814
            }
        ],
        "seed": 20504509
    },
    {
        "id": "d10cb586-36b6-41d2-8b05-82ec3925d44e",
        "tournamentId": "tournament2",
        "state": MatchState.CANCELLED,
        "currentPlayersCount": 1,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 296,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_SOFT_CURRENCY": 60
                },
                "startDateTs": 1692259760
            }
        ],
        "seed": 1317989237
    },
    {
        "id": "797212f7-8ff3-4d2c-b965-df3bf82235f9",
        "tournamentId": "tournament2",
        "state": MatchState.CANCELLED,
        "currentPlayersCount": 1,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 17184,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_SOFT_CURRENCY": 60
                },
                "startDateTs": 1692259683
            }
        ],
        "seed": 1684542976
    },
    {
        "id": "caf5f738-db2c-4868-aab2-0453f0de4800",
        "tournamentId": "tournament2",
        "state": MatchState.CANCELLED,
        "currentPlayersCount": 1,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 16952,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_SOFT_CURRENCY": 60
                },
                "startDateTs": 1692259650
            }
        ],
        "seed": 1449872171
    },
    {
        "id": "1961ba7d-2448-4205-b136-990db3ca7137",
        "tournamentId": "tournament2",
        "state": MatchState.CANCELLED,
        "currentPlayersCount": 1,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 9244,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_SOFT_CURRENCY": 60
                },
                "startDateTs": 1692259438
            }
        ],
        "seed": 70520395
    },
    {
        "id": "20c22c64-7f0b-43a3-a96f-fc4dadb70b32",
        "tournamentId": "tournament2",
        "state": MatchState.CANCELLED,
        "currentPlayersCount": 1,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 15592,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_SOFT_CURRENCY": 60
                },
                "startDateTs": 1692259365
            }
        ],
        "seed": 1171617118
    },
    {
        "id": "2566eade-867c-4d9a-9a86-5bb679b5d834",
        "tournamentId": "tournament2",
        "state": MatchState.CANCELLED,
        "currentPlayersCount": 1,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 15690,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_SOFT_CURRENCY": 60
                },
                "startDateTs": 1692259303
            }
        ],
        "seed": 46279562
    },
    {
        "id": "619cb5b5-e888-48a0-ae15-cee9ac032de0",
        "tournamentId": "tournament2",
        "state": MatchState.CANCELLED,
        "currentPlayersCount": 2,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1111,
                "name": "Player 1111",
                "place": 1,
                "score": 17088,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_SOFT_CURRENCY": 60
                },
                "startDateTs": 1692258726
            },
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 2,
                "score": 15920,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_SOFT_CURRENCY": 40
                },
                "startDateTs": 1692259186
            }
        ],
        "seed": 1641930180
    },
    {
        "id": "22f5e22a-61df-4cba-ab0e-6e1c2daf10e8",
        "tournamentId": "tournament5",
        "state": MatchState.FINISHED,
        "currentPlayersCount": 2,
        "maxPlayersCount": 2,
        "playersResults": [
            {
                "playerId": 1111,
                "name": "Player 1111",
                "place": 1,
                "score": 8,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_HARD_CURRENCY": 51000,
                    "ID_BONUS_CURRENCY": 5000
                },
                "startDateTs": 1692273609
            },
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 2,
                "state": MatchState.FINISHED,
                "startDateTs": 1692273618
            }
        ],
        "seed": 1427099912
    },
    {
        "id": "21e090ec-3bce-452a-8414-fccd6d2210a1",
        "tournamentId": "tournament5",
        "state": MatchState.FINISHED,
        "currentPlayersCount": 2,
        "maxPlayersCount": 6,
        "playersResults": [
            {
                "playerId": 1111,
                "name": "Player 1111",
                "place": 2,
                "state": MatchState.ONGOING,
                "startDateTs": 1692267534
            },
            {
                "playerId": 1634,
                "name": "Player 1634",
                "place": 1,
                "score": 8,
                "state": MatchState.FINISHED,
                "rewards": {
                    "ID_HARD_CURRENCY": 51000,
                    "ID_BONUS_CURRENCY": 5000
                },
                "startDateTs": 1692267525
            }
        ],
        "seed": 585066277
    }
];

export default mock_match_history;