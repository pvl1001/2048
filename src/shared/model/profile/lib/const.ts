import {ProfileCurrency} from "../api/adapter";
import {ProfileDailyRewards} from "../types";


export const defaultCurrency: ProfileCurrency = {
    exp: 0,
    soft: 0,
    formatSoft: 0,
    hard: 0,
    formatHard: 0,
    uniteHard: 0,
    formatUniteHard: 0,
    bonus: 0,
    formatBonus: 0,
};

export const defaultDailyRewards: ProfileDailyRewards = {
    loginDay: 0,
    currentReward: 0,
    rewardDays: null,
};