import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "app/store";
import {StatusRequest} from "shared/common/StatusRequest";


export class GlobalConfigSelectors {
    static _isSuccess = (state: RootState) => state.globalConfig.status === StatusRequest.SUCCESS;

    static _region = createSelector(
        [(state: RootState) => state.globalConfig.data.RegionConfig],
        (regionConfig) => ({
            keys: Object.keys(regionConfig),
            ageRestriction: +regionConfig?.RU.AgeRestriction,
        })
    );

    static _designInt = createSelector(
        [(state: RootState) => state.globalConfig.data.DesignIntVariable],
        (designIntVariable) => ({
            maxEmailLength: +designIntVariable.MaxEmailLength.Value,
            minFirstNameLength: +designIntVariable.MinFirstNameLength.Value,
            maxFirstNameLength: +designIntVariable.MaxFirstNameLength.Value,
            minSecondNameLength: +designIntVariable.MinSecondNameLength.Value,
            maxSecondNameLength: +designIntVariable.MaxSecondNameLength.Value,
            minZipCodeLength: +designIntVariable.MinZipCodeLength.Value,
            maxZipCodeLength: +designIntVariable.MaxZipCodeLength.Value,
            maxReferralCodeLength: +designIntVariable.MaxReferralCodeLength.Value,
            maxInvites: +designIntVariable.MaxInvites.Value,
            minNicknameLength: +designIntVariable.MinNicknameLength.Value,
            maxNicknameLength: +designIntVariable.MaxNicknameLength.Value,
            maxSupportMsgLength: +designIntVariable.MaxSupportMsgLength.Value,
        })
    );

    static _links = createSelector(
        [(state: RootState) => state.globalConfig.data.DesignStringVariable],
        (designStringVariable) => ({
            termsOfService: designStringVariable.TermsOfServiceLink.Value,
            privacyPolicy: designStringVariable.PrivacyPolicyLink.Value,
            contactUs: designStringVariable.ContactUsLink.Value,
            rateUsIOS: designStringVariable.RateUsLinkIOS.Value,
            rateUs: designStringVariable.RateUsLink.Value,
        }));

    static _storeItemConfig = (state: RootState) => state.globalConfig.data.StoreItemConfig;

    static _designCurrency = createSelector(
        [(state: RootState) => state.globalConfig.data.DesignCurrencyVariable],
        (designCurrencyVariable) => ({
            dailyGiftValue: designCurrencyVariable.DailyGift.Value.split(':')[1],
            tutFeeCurrency: +designCurrencyVariable.TutorialFee.Value.split(':')[1],
        })
    );

    static _storeLevelConfig = createSelector(
        [(state: RootState) => state.globalConfig.data.StoreLevelConfig],
        (storeLevelConfig) => ({
            data: storeLevelConfig,
            maxLevel: Math.max(...Object.keys(storeLevelConfig).map(n => +n)),
            progressLevels: Array(Object.keys(storeLevelConfig).length).fill(null).map((_, i) => i + 1),
        })
    );

    static _getCurrentReward = (level: number) => (state: RootState) => state.globalConfig.data.StoreLevelConfig[level];

    static _paymentCurrencyConfig = (state: RootState) => state.globalConfig.data.PaymentCurrencyConfig;

    static _payoutFormConfig = (state: RootState) => state.globalConfig.data.PayoutFormConfig;

    static _dailyRewards = (state: RootState) => Object.values(state.globalConfig.data.DailyRewardConfig);
    static _getDailyReward = (day: number) => (state: RootState) => state.globalConfig.data.DailyRewardConfig[`day` + day as keyof typeof state.globalConfig.data.DailyRewardConfig];
}
