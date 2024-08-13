import dayjs from "dayjs";
import {OfferId} from "shared/model/global_config";
import {OffersResponse} from "../../types";

// console.log(dayjs().add(1, 'm').format());

export const mockOffersResponse: {data: OffersResponse} = {
    data: {
        "offers": [
            {
                "deadlineSecondsLeft": 1,
                "deadlineTs": dayjs.utc().add(62, 'm').unix(),
                "discount": 30,
                "id": OfferId.PERSONAL_TUTORIAL_COMPLETE_OFFER,
                "maxShowCount": 1,
                "maxUsageCount": 1,
                "price": {
                    "CENTS": 200,
                },
                "rewards": [
                    {
                        "currency": {
                            "ID_BONUS_CURRENCY": 100,
                            "ID_HARD_CURRENCY": 100,
                            "ID_SOFT_CURRENCY": 100,
                        },
                        "items": []
                    }
                ],
                "shopPositionId": '',
                "sku": '',
                "state": {
                    "showCount": 1,
                    "usageCount": 1,
                }
            },
            {
                "deadlineSecondsLeft": 1,
                "deadlineTs": dayjs.utc().add(62, 's').unix(),
                "discount": 15,
                "id": OfferId.PERSONAL_REGISTRATION_OFFER,
                "maxShowCount": 1,
                "maxUsageCount": 1,
                "price": {
                    "CENTS": 2500,
                },
                "rewards": [
                    {
                        "currency": {
                            "ID_BONUS_CURRENCY": 2000,
                            "ID_HARD_CURRENCY": 2000,
                            "ID_SOFT_CURRENCY": 2000,
                        },
                        "items": []
                    }
                ],
                "shopPositionId": '',
                "sku": '',
                "state": {
                    "showCount": 1,
                    "usageCount": 1,
                }
            },
        ],
        "nextUpdateTs": 0,
        "nextUpdateSecondsLeft": 0,
    },
};