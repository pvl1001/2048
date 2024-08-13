import {Money} from "shared/api/server_service";
import {defaultAvatar} from "shared/lib/avatarNames";
import {Mask} from "shared/lib/Mask";
import {Profile, ProfileDailyRewards, ProfileResponse} from "../types";


type TReward = {
    days: Record<number, number>
    current: number[]
}
export type ProfileCurrency = {
    exp: number
    soft: number
    formatSoft: string | number
    bonus: number
    formatBonus: number
    hard: number
    formatHard: number
    uniteHard: number
    formatUniteHard: number
}

export class ProfileAdapter {

    private static getDailyRewards(payload: ProfileResponse): ProfileDailyRewards {
        const dailyRewards: TReward = Object.entries(payload.money).reduce((acc: TReward, [key, val]) => {
            if (key.includes('TKN_REWARD_DAY') && val !== undefined) {
                const numberDay: number = Number(key.at(-1) ?? '0');
                acc.days = {...acc.days, [numberDay]: val};

                if (val > 0) {
                    acc.current.push(numberDay);
                }
            }
            return acc;
        }, {days: {}, current: []});

        return {
            loginDay: payload.money.ID_LOGIN_DAYS,
            currentReward: dailyRewards.current.length ? Math.max(...dailyRewards.current) : 0,
            rewardDays: Object.keys(dailyRewards.days).length ? dailyRewards.days : null
        };
    }

    static getCurrency(money: Partial<Money>): ProfileCurrency {
        return {
            exp: money.ID_EXP || 0,
            soft: money.ID_SOFT_CURRENCY || 0,
            formatSoft: Mask.softCurrency(money.ID_SOFT_CURRENCY),
            bonus: money.ID_BONUS_CURRENCY || 0,
            formatBonus: Mask.hardCurrency(money.ID_BONUS_CURRENCY),
            hard: money.ID_HARD_CURRENCY || 0,
            formatHard: Mask.hardCurrency(money.ID_HARD_CURRENCY),
            get uniteHard(): number {
                return this.hard + this.bonus;
            },
            get formatUniteHard(): number {
                return Mask.hardCurrency(this.uniteHard);
            },
        };
    }

    static getProfile(payload: ProfileResponse): Profile {
        return {
            id: payload.id,
            level: payload.money.ID_LVL ?? 0,
            exp: payload.money.ID_EXP ?? 0,
            currency: this.getCurrency(payload.money),
            name: payload.name,
            money: payload.money,
            properties: payload.properties,
            hasLevelUp: (+payload.attributes.level || 0) !== payload.money.ID_LVL,
            avatarId: payload.attributes['avatar-id'] || defaultAvatar,
            dailyRewards: this.getDailyRewards(payload),
            levelRewards: payload.deals.delayedLevelRewards.map((el) => el.level),
            // attributes: payload.attributes,
            // battlesCount: payload.battlesCount,
            // "regDate": number
            // "updateDate": number
            // "cantsPayed": number
            // "revision": number
        };
    }
}