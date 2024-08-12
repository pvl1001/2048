import dayjs from "dayjs";
import {MatchState} from "shared/common/MatchState";
import {Tournament} from "../types";

// let testTime = dayjs('2023-09-15 11:10');
// console.log(testTime.unix());

let mockTournaments: Tournament[] = [
    {
        "id": "tournament1",
        "numberOfParticipants": 6,
        "rewards": [
            {
                "place": 1,
                "currency": {
                    "ID_HARD_CURRENCY": 240
                }
            },
            {
                "place": 2,
                "currency": {
                    "ID_HARD_CURRENCY": 120
                }
            },
            {
                "place": 3,
                "currency": {
                    "ID_HARD_CURRENCY": 60
                }
            }
        ],
        "entryFee": {
            "ID_BONUS_CURRENCY": 50,
            "ID_HARD_CURRENCY": 50
        },
        "fromTimeStamp": 1669852800,
        "untilTimeStamp": null,
        "state": MatchState.ONGOING
    },
    {
        "id": "tournament2",
        "numberOfParticipants": 6,
        "rewards": [
            {
                "place": 1,
                "currency": {
                    "ID_SOFT_CURRENCY": 60
                }
            },
            {
                "place": 2,
                "currency": {
                    "ID_SOFT_CURRENCY": 40
                }
            },
            {
                "place": 3,
                "currency": {
                    "ID_SOFT_CURRENCY": 10
                }
            }
        ],
        "entryFee": {
            "ID_SOFT_CURRENCY": 20
        },
        "fromTimeStamp": 1669852800,
        "untilTimeStamp": dayjs().unix() + 60,
        "state": MatchState.ONGOING
    },
    {
        "id": "tournament3",
        "numberOfParticipants": 6,
        "rewards": [
            {
                "place": 1,
                "currency": {
                    "ID_HARD_CURRENCY": 670
                }
            },
            {
                "place": 2,
                "currency": {
                    "ID_HARD_CURRENCY": 380
                }
            },
            {
                "place": 3,
                "currency": {
                    "ID_HARD_CURRENCY": 150
                }
            }
        ],
        "entryFee": {
            "ID_BONUS_CURRENCY": 150,
            "ID_HARD_CURRENCY": 150
        },
        "fromTimeStamp": 1694766100,
        "untilTimeStamp": null,
        "state": MatchState.ONGOING
    },
    {
        "id": "tournament4",
        "numberOfParticipants": 10,
        "rewards": [
            {
                "place": 1,
                "currency": {
                    "ID_BONUS_CURRENCY": 400
                }
            },
            {
                "place": 2,
                "currency": {
                    "ID_BONUS_CURRENCY": 200
                }
            },
            {
                "place": 3,
                "currency": {
                    "ID_BONUS_CURRENCY": 100
                }
            }
        ],
        "entryFee": {
            "ID_SOFT_CURRENCY": 1200
        },
        "fromTimeStamp": dayjs().unix() + 60,
        "untilTimeStamp": null,
        "state": MatchState.ONGOING
    },
    {
        "id": "tournament5",
        "numberOfParticipants": 2,
        "rewards": [
            {
                "place": 1,
                "currency": {
                    "ID_HARD_CURRENCY": 1400
                }
            }
        ],
        "entryFee": {
            "ID_BONUS_CURRENCY": 450,
            "ID_HARD_CURRENCY": 450
        },
        "fromTimeStamp": 1672531200,
        "untilTimeStamp": null,
        "state": MatchState.ONGOING
    },
    {
        "id": "tournament6",
        "numberOfParticipants": 7,
        "rewards": [
            {
                "place": 1,
                "currency": {
                    "ID_HARD_CURRENCY": 2800
                }
            },
            {
                "place": 2,
                "currency": {
                    "ID_HARD_CURRENCY": 1600
                }
            },
            {
                "place": 3,
                "currency": {
                    "ID_HARD_CURRENCY": 950
                }
            }
        ],
        "entryFee": {
            "ID_BONUS_CURRENCY": 675,
            "ID_HARD_CURRENCY": 675
        },
        "fromTimeStamp": 1669852800,
        "untilTimeStamp": 1766620800,
        "state": MatchState.ONGOING
    }
];

export default mockTournaments;