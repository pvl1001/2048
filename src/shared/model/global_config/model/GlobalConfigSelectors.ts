import {RootState} from "app/store";
import {StatusRequest} from "shared/common/StatusRequest";


export type GlobalConfigLinks = Record<
    | 'termsOfService'
    | 'privacyPolicy'
    | 'contactUs'
    | 'rateUsIOS'
    | 'rateUs', string
>

export class GlobalConfigSelectors {
    static _isSuccess = (state: RootState) => state.globalConfig.status === StatusRequest.SUCCESS;

    static _region = (state: RootState) => ({
        keys: Object.keys(state.globalConfig.data.RegionConfig),
        ageRestriction: +state.globalConfig.data.RegionConfig?.RU.AgeRestriction,
    });

    static _designInt = (state: RootState) => ({
        maxEmailLength: +state.globalConfig.data.DesignIntVariable.MaxEmailLength.Value,
        minFirstNameLength: +state.globalConfig.data.DesignIntVariable.MinFirstNameLength.Value,
        maxFirstNameLength: +state.globalConfig.data.DesignIntVariable.MaxFirstNameLength.Value,
        minSecondNameLength: +state.globalConfig.data.DesignIntVariable.MinSecondNameLength.Value,
        maxSecondNameLength: +state.globalConfig.data.DesignIntVariable.MaxSecondNameLength.Value,
        minZipCodeLength: +state.globalConfig.data.DesignIntVariable.MinZipCodeLength.Value,
        maxZipCodeLength: +state.globalConfig.data.DesignIntVariable.MaxZipCodeLength.Value,
        maxReferralCodeLength: +state.globalConfig.data.DesignIntVariable.MaxReferralCodeLength.Value,
        maxInvites: +state.globalConfig.data.DesignIntVariable.MaxInvites.Value,
        minNicknameLength: +state.globalConfig.data.DesignIntVariable.MinNicknameLength.Value,
        maxNicknameLength: +state.globalConfig.data.DesignIntVariable.MaxNicknameLength.Value,
        maxSupportMsgLength: +state.globalConfig.data.DesignIntVariable.MaxSupportMsgLength.Value,
    });

    static _links = (state: RootState) => ({
        termsOfService: state.globalConfig.data.DesignStringVariable.TermsOfServiceLink.Value,
        privacyPolicy: state.globalConfig.data.DesignStringVariable.PrivacyPolicyLink.Value,
        contactUs: state.globalConfig.data.DesignStringVariable.ContactUsLink.Value,
        rateUsIOS: state.globalConfig.data.DesignStringVariable.RateUsLinkIOS.Value,
        rateUs: state.globalConfig.data.DesignStringVariable.RateUsLink.Value,
    });

    static _storeItemConfig = (state: RootState) => state.globalConfig.data.StoreItemConfig;

    static _designCurrency = (state: RootState) => ({
        dailyGiftValue: state.globalConfig.data.DesignCurrencyVariable.DailyGift.Value.split(':')[1],
        tutFeeCurrency: +state.globalConfig.data.DesignCurrencyVariable.TutorialFee.Value.split(':')[1],
    });

    static _storeLevelConfig = (state: RootState) => ({
        data: state.globalConfig.data.StoreLevelConfig,
        maxLevel: Math.max(...Object.keys(state.globalConfig.data.StoreLevelConfig).map(n => +n)),
        progressLevels: Array(Object.keys(state.globalConfig.data.StoreLevelConfig).length).fill(null).map((_, i) => i + 1),
    });

    static _getCurrentReward = (level: number) => (state: RootState) => state.globalConfig.data.StoreLevelConfig[level];

    static _paymentCurrencyConfig = (state: RootState) => state.globalConfig.data.PaymentCurrencyConfig;

    static _payoutFormConfig = (state: RootState) => state.globalConfig.data.PayoutFormConfig;

    static _dailyRewards = (state: RootState) => Object.values(state.globalConfig.data.DailyRewardConfig);
    static _getDailyReward = (day: number) => (state: RootState) => state.globalConfig.data.DailyRewardConfig[`day` + day as keyof typeof state.globalConfig.data.DailyRewardConfig];
}
