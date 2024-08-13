import {defaultAvatar} from "shared/lib/avatarNames";
import {Profile} from "shared/model/profile";


export const mockProfile: Profile = {
    "id": '1634',
    "name": 'Test',
    "money": {
        'ID_EXP': 45, // опыт
        'ID_LVL': 11, // уровень
        'ID_LOGIN_DAYS': 1, // дней подряд заходил
        'ID_HARD_CURRENCY': 10000, // наличные
        'ID_SOFT_CURRENCY': 300, // монеты
        'ID_BONUS_CURRENCY': 500, // бонусы
        'ID_DAILY_GIFT_TKN': 1, // ежедневный подарок
        'TKN_REWARD_DAY1': 1, // награда за день
        'ST_PAYOUT_STATUS': 1, // статус вывода валюты
    },
    "properties": {
        "bDay": '',
        "email": 'test@gmail.com',
        "phone": '+79999999999',
        "zipCode": '',
        "lastName": 'Ivanov',
        "firstName": 'Ivan',
        "referralCode": 'jk3fdf',
        "ST_D24_PAYOUT_ID": '',
        "registrationCountryCode": 'US',
    },
    "hasLevelUp": true,
    "avatarId": defaultAvatar,
    "dailyRewards": {
        loginDay: 1,
        currentReward: 1,
        rewardDays: {},
    },
    "levelRewards": [],
    "level": 11,
    currency: {
        exp: 45,
        soft: 300303,
        formatSoft: 300303,
        bonus: 500,
        formatBonus: 5,
        hard: 10000,
        formatHard: 100,
        uniteHard: 10500,
        formatUniteHard: 105,
    },
    exp: 45
};