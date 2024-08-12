export const mockD24SuccessMessage = {
    "persistent": {
        "message": {
            "topic": "FINISH_D24_PAYIN_INBOX",
            "payload": {
                "type": "DtoFinishD24PayinInbox",
                "object": {
                    "@type": "type.googleapis.com/GameFramework.Meta.Protocol.Payment.D24.DtoFinishD24PayinInbox",
                    "orderId": "PixicubeStand1_107",
                    "extTransactionId": "301357190",
                    "status": "COMPLETED",
                    "price": {
                        "CurrencyId": "CAD",
                        "Count": 4.5
                    },
                    "sku": "5_hard_curr",
                    "rewardId": 455,
                    "rewards": [
                        {
                            "CurrencyId": "ID_BONUS_CURRENCY",
                            "Count": "0"
                        },
                        {
                            "CurrencyId": "ID_EXP",
                            "Count": "25"
                        },
                        {
                            "CurrencyId": "ID_HARD_CURRENCY",
                            "Count": "300"
                        },
                        {
                            "CurrencyId": "ID_SOFT_CURRENCY",
                            "Count": "100"
                        }
                    ],
                    "position": {
                        "sku": "",
                        "currency": [
                            {
                                "CurrencyId": "ID_BONUS_CURRENCY",
                                "Count": "0"
                            },
                            {
                                "CurrencyId": "ID_EXP",
                                "Count": "25"
                            },
                            {
                                "CurrencyId": "ID_HARD_CURRENCY",
                                "Count": "300"
                            },
                            {
                                "CurrencyId": "ID_SOFT_CURRENCY",
                                "Count": "100"
                            }
                        ],
                        "items": [],
                        "attributes": [],
                        "centum": "450"
                    },
                    "profileChanges": [
                        {
                            "causeId": "INAPP_DEPOSIT",
                            "currencyChanges": [],
                            "itemsChanges": [],
                            "attributes": [],
                            "propertyChanges": [],
                            "rewardChanges": [
                                {
                                    "id": 455
                                }
                            ],
                            "extensions": []
                        }
                    ]
                }
            },
            "created": "1716191370",
            "validUntil": "0"
        },
        "id": "1953"
    }
};

export const mockD24UnclaimMessage = {
    "transient": {
        "topic": "UNCLAIMED_REWARD",
        "payload": {
            "type": "DtoUnclaimedRewardInbox",
            "object": {
                "@type": "type.googleapis.com/GameFramework.Meta.Protocol.DtoUnclaimedRewardInbox",
                "reward": {
                    "rewardId": 455,
                    "cause": "INAPP_DEPOSIT",
                    "currency": [
                        {
                            "CurrencyId": "ID_BONUS_CURRENCY",
                            "Count": "0"
                        },
                        {
                            "CurrencyId": "ID_EXP",
                            "Count": "25"
                        },
                        {
                            "CurrencyId": "ID_HARD_CURRENCY",
                            "Count": "300"
                        },
                        {
                            "CurrencyId": "ID_SOFT_CURRENCY",
                            "Count": "100"
                        }
                    ],
                    "itemsMap": [],
                    "items": [],
                    "attributes": []
                }
            }
        },
        "created": "1716191370",
        "validUntil": "0"
    }
};