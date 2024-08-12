import {Mask} from "shared/lib/Mask";
import {DailyRewardConfig, DailyRewardResponse, GlobalConfig, GlobalConfigResponse, OfferShop, StoreItemConfigResponseItem, StoreLevelConfigValue} from "../types";


export class ConfigAdapter {
    private static reformatItemConfig(itemReward: StoreItemConfigResponseItem) {
        return {
            formatBonus: Mask.hardCurrency(+itemReward["Reward[ID_BONUS_CURRENCY]"]),
            soft: +itemReward["Reward[ID_SOFT_CURRENCY]"],
            exp: +itemReward["Reward[ID_EXP]"],
        };
    }

    static getGlobalConfig(payload: GlobalConfigResponse): GlobalConfig {
        let OfferShopPositionConfig: GlobalConfig['OfferShopPositionConfig'] = Object.values(payload.OfferShopPositionConfig || {}).reduce((acc, value) => {
            return {
                ...acc,
                [value.OfferId]: {
                    discount: +value.Discount || 0,
                    price: {
                        hard: Mask.hardCurrency(+value["Price[ID_HARD_CURRENCY]"] || 0),
                        soft: +value["Price[ID_SOFT_CURRENCY]"] || 0,
                    },
                    currency: {
                        bonus: Mask.hardCurrency(+value["currency[ID_BONUS_CURRENCY]"] || 0),
                        hard: Mask.hardCurrency(+value["currency[ID_HARD_CURRENCY]"] || 0),
                        soft: Mask.hardCurrency(+value["currency[ID_SOFT_CURRENCY]"] || 0),
                    },
                }
            };
        }, {} as OfferShop);

        let DailyRewardConfig: GlobalConfig["DailyRewardConfig"] = Object.values(payload.DailyRewardConfig || {}).reduce((acc: DailyRewardConfig, el: DailyRewardResponse, i) => {
            return {
                ...acc,
                ['day' + (i + 1)]: {
                    id: +el["RequireMin[ID_LOGIN_DAYS]"],
                    soft: el["Reward[ID_SOFT_CURRENCY]"],
                    bonus: el["Reward[ID_BONUS_CURRENCY]"],
                    exp: el["levelRewardConfig.levelExpPct"],
                }
            };
        }, {} as DailyRewardConfig);

        let StoreLevelConfig: GlobalConfig["StoreLevelConfig"] = Object.entries(payload.StoreLevelConfig || {}).reduce((acc: any, [k, val]: [string, StoreLevelConfigValue]) => {
            let level: number = Number(k.replace('idPlayerLevel', ''));
            let newValueKey: 'bonus' | 'soft' = val["levelRewardConfig.currency"].includes('BONUS') ? 'bonus' : 'soft';
            let newValueValue: number = Number(val["levelRewardConfig.currency"].split(':')[1]);
            return {
                ...acc,
                [level]: {
                    [newValueKey]: newValueValue,
                    exp: +val['Price[ID_EXP]'],
                },
            };
        }, {});

        let StoreItemConfig: GlobalConfig["StoreItemConfig"] = {
            tutReward: this.reformatItemConfig(payload.StoreItemConfig.ID_TUT_REWARD),
            regReward: this.reformatItemConfig(payload.StoreItemConfig.ID_REG_REWARD),
        };

        let PayoutFormConfig = JSON.parse(JSON.stringify(payload.PayoutFormConfig || {}).replaceAll(' ', '')); // fix - убрать пробелы в строках

        return {
            ...payload,
            DailyRewardConfig,
            StoreLevelConfig,
            StoreItemConfig,
            PayoutFormConfig,
            OfferShopPositionConfig,
        };
    }
}