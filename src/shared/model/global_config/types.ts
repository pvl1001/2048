import {FlagId} from "features/auth";
import {ConfigDailyReward, StoreLevelConfig, TWithdrawFormConfig} from "../../api/adapters";


export type DailyRewardResponse = {
    "RequireMin[ID_LOGIN_DAYS]": string
    "RequireMin[ID_REGISTERED]": string
    "Reward[ID_BONUS_CURRENCY]": string
    "Reward[ID_SOFT_CURRENCY]": string
    "Visible": string
    "levelRewardConfig.levelExpPct": string
}

export type StoreItemConfigResponse = Record<
    | 'ID_REG_REWARD'
    | 'ID_TUT_FEE'
    | 'ID_TUT_GIFT'
    | 'ID_TUT_REWARD'
    | 'idDailyGift'
    | 'idWatchAdsReward'
    , StoreItemConfigResponseItem>

export type StoreItemConfigResponseItem = {
    "IsUniquePurchase": string
    "Price[ID_ADS_TOKEN]": string
    "Price[ID_DAILY_GIFT_TKN]": string
    "Price[ID_SOFT_CURRENCY]": string
    "Reward[ID_BONUS_CURRENCY]": string
    "Reward[ID_EXP]": string
    "Reward[ID_SOFT_CURRENCY]": string
    "Visible": string
}

export type GlobalConfig = {
    "DailyRewardConfig": DailyRewardConfig
    "DesignFloatVariable": Record<'AudioVolumeChangeTime', {value: string}>
    "DesignIntArrayVariable": Record<
        | 'AdGiftTokenUpdateHours'
        | 'AdLoadAttemptDelays'
        | 'DailyGiftTokenUpdateHours'
        | 'TournamentCollectionUpdateAttemptDelays'
        , {"Value": string}>
    "DesignStringVariable": Record<
        | "ContactUsLink"
        | "IPInformationServiceUrl"
        | "NicknameTemplate"
        | "PrivacyPolicyLink"
        | "RateUsLink"
        | "RateUsLinkIOS"
        | "TermsOfServiceLink"
        | "XsollaPayoutWidgetUrl"
        , {"Value": string}>
    "RegionConfig": Record<FlagId, {"AgeRestriction": string, "Enabled": string}>
    "DesignCurrencyVariable": Record<
        | "AdGift"
        | "DailyGift"
        | "DepositRewardPerDollar"
        | "InviteFriendReward"
        | "TutorialFee"
        | "TutorialGift"
        | "TutorialReward"
        , {"Value": string}>
    "DesignStringArrayVariable": {"SupportQuestions": {"Value": string}},
    "DesignIntVariable": Record<
        | "ConfirmationCodeResendDelay"
        | "HowToPlayPagesNumber"
        | "MatchRestoreMaxTime"
        | "MatchResultRestoreMaxTime"
        | "MaxAttachedFileCount"
        | "MaxAttachedFileSize"
        | "MaxEmailLength"
        | "MaxFirstNameLength"
        | "MaxInvites"
        | "MaxLevel"
        | "MaxNicknameLength"
        | "MaxReferralCodeLength"
        | "MaxSecondNameLength"
        | "MaxSupportMsgLength"
        | "MaxTournamentCollectionUpdateDelay"
        | "MaxZipCodeLength"
        | "MinFirstNameLength"
        | "MinNicknameLength"
        | "MinSecondNameLength"
        | "MinTournamentCollectionUpdateDelay"
        | "MinZipCodeLength"
        | "PhoneCodeLength"
        | "TimeBaseScore", {"Value": string}>,
    "DesignBoolVariable": {"SideCubeCounter": {"Value": string}},
    "StoreLevelConfig": StoreLevelConfig
    "StoreItemConfig": Record<
        | 'regReward'
        | 'tutReward'
        , {
        formatBonus: number
        soft: number
        exp: number
    }>,
    "PayoutFormConfig": Record<
        | "Form_BO"
        | "Form_BR"
        | "Form_BR10002"
        | "Form_CA"
        | "Form_CA10000"
        | "Form_CL"
        | "Form_CO"
        | "Form_CO10001"
        | "Form_CO10002"
        | "Form_CO10003"
        | "Form_CO1507"
        | "Form_CO1551"
        | "Form_EC"
        | "Form_ID"
        | "Form_IN"
        | "Form_JP"
        | "Form_JP10000"
        | "Form_JP10001"
        | "Form_KE"
        | "Form_MX"
        | "Form_MX10000"
        | "Form_MY"
        | "Form_NG"
        | "Form_PE"
        | "Form_PH"
        | "Form_TH"
        | "Form_VN", TWithdrawFormConfig>
    "PaymentCurrencyConfig": Partial<Record<FlagId, PaymentCurrency>>
    "OfferShopPositionConfig": OfferShop
}

export type PaymentCurrency = {
    "Comment": string
    "ConversionRate": string
    "Currency": string
}

export type StoreLevelConfigKeys =
    | 'idPlayerLevel1'
    | 'idPlayerLevel2'
    | 'idPlayerLevel3'
    | 'idPlayerLevel4'
    | 'idPlayerLevel5'
    | 'idPlayerLevel6'
    | 'idPlayerLevel7'
    | 'idPlayerLevel8'
    | 'idPlayerLevel9'
    | 'idPlayerLevel10'
    | 'idPlayerLevel11'
    | 'idPlayerLevel12'
    | 'idPlayerLevel13'
    | 'idPlayerLevel14'
    | 'idPlayerLevel15'
    | 'idPlayerLevel16'
    | 'idPlayerLevel17'
    | 'idPlayerLevel18'
    | 'idPlayerLevel19'
    | 'idPlayerLevel20'
    | 'idPlayerLevel21'
    | 'idPlayerLevel22'
    | 'idPlayerLevel23'
    | 'idPlayerLevel24'
    | 'idPlayerLevel25'

export enum OfferId {
    GENERAL_DATE_TIME_OFFER = 'general_date_time_offer',
    GENERAL_PAYIN_COUNT_OFFER = 'general_payin_count_offer',
    GENERAL_TIME_OFFER = 'general_time_offer',
    INACTIVE_OFFER = 'inactive_offer',
    PERSONAL_COUNT_LEVEL_OFFER = 'personal_count_level_offer',
    PERSONAL_COUNT_TOURNAMENTS_OFFER = 'personal_count_tournaments_offer',
    PERSONAL_LOST_5_MATCH_OFFER1 = 'personal_lost_5_match_offer1',
    PERSONAL_LOST_5_MATCH_OFFER2 = 'personal_lost_5_match_offer2',
    PERSONAL_LOST_MATCH_OFFER = 'personal_lost_match_offer',
    PERSONAL_ONE_SHOW_OFFER = 'personal_one_show_offer',
    PERSONAL_ONE_USAGE_OFFER = 'personal_one_usage_offer',
    PERSONAL_REGISTRATION_OFFER = 'personal_registration_offer',
    PERSONAL_TUTORIAL_COMPLETE_OFFER = 'personal_tutorial_complete_offer',
    PERSONAL_WIN_MATCH_OFFER = 'personal_win_match_offer',
    PLAYER_LEVEL1 = 'player_level1',
    PLAYER_LEVEL5 = 'player_level5',
    PLAYER_LEVEL8 = 'player_level8',
    RANDOM_TIME_OFFER1 = 'random_time_offer1',
    RANDOM_TIME_OFFER2 = 'random_time_offer2',
    TEST_INAPP_OFFER = 'test_inapp_offer',
    TEST_INGAME_OFFER = 'test_ingame_offer',
}

export enum OfferGroupId {
    PERSONAL_LOST_5_MATCH_GROUP1 = 'personal_lost_5_match_group1',
    PERSONAL_WIN_MATCH_OFFER_GROUP1 = 'personal_win_match_offer_group1',
    PLAYER_LEVEL1 = 'player_level1',
    REGISTERED_PLAYER_GROUP0 = 'registered_player_group0',
    REGISTERED_PLAYER_RANDOM_TIME_OFFER_GROUP0 = 'registered_player_random_time_offer_group0',
}

export type GlobalConfigResponse = {
    "DailyRewardConfig": Record<string, DailyRewardResponse>
    "DesignFloatVariable": Record<'AudioVolumeChangeTime', {value: string}>
    "DesignIntArrayVariable": Record<
        | 'AdGiftTokenUpdateHours'
        | 'AdLoadAttemptDelays'
        | 'DailyGiftTokenUpdateHours'
        | 'TournamentCollectionUpdateAttemptDelays'
        , {"Value": string}>
    "DesignStringVariable": Record<
        | "ContactUsLink"
        | "IPInformationServiceUrl"
        | "NicknameTemplate"
        | "PrivacyPolicyLink"
        | "RateUsLink"
        | "RateUsLinkIOS"
        | "TermsOfServiceLink"
        | "XsollaPayoutWidgetUrl"
        , {"Value": string}>
    "RegionConfig": Record<FlagId, {"AgeRestriction": string, "Enabled": string}>
    "DesignCurrencyVariable": Record<
        | "AdGift"
        | "DailyGift"
        | "DepositRewardPerDollar"
        | "InviteFriendReward"
        | "TutorialFee"
        | "TutorialGift"
        | "TutorialReward"
        , {"Value": string}>
    "DesignStringArrayVariable": {"SupportQuestions": {"Value": string}},
    "DesignIntVariable": Record<
        | "ConfirmationCodeResendDelay"
        | "HowToPlayPagesNumber"
        | "MatchRestoreMaxTime"
        | "MatchResultRestoreMaxTime"
        | "MaxAttachedFileCount"
        | "MaxAttachedFileSize"
        | "MaxEmailLength"
        | "MaxFirstNameLength"
        | "MaxInvites"
        | "MaxLevel"
        | "MaxNicknameLength"
        | "MaxReferralCodeLength"
        | "MaxSecondNameLength"
        | "MaxSupportMsgLength"
        | "MaxTournamentCollectionUpdateDelay"
        | "MaxZipCodeLength"
        | "MinFirstNameLength"
        | "MinNicknameLength"
        | "MinSecondNameLength"
        | "MinTournamentCollectionUpdateDelay"
        | "MinZipCodeLength"
        | "PhoneCodeLength"
        | "TimeBaseScore", {"Value": string}>,
    "DesignBoolVariable": {"SideCubeCounter": {"Value": string}},
    "StoreLevelConfig": Record<StoreLevelConfigKeys, {
        "Price[ID_EXP]": string
        "RequireMax[ID_LVL]": string
        "RequireMin[ID_LVL]": string
        "Reward[ID_LVL]": string
        "Visible": string
        "levelRewardConfig.currency": string
    }>
    "StoreItemConfig": StoreItemConfigResponse
    "PayoutFormConfig": Record<
        | "Form_BO"
        | "Form_BR"
        | "Form_BR10002"
        | "Form_CA"
        | "Form_CA10000"
        | "Form_CL"
        | "Form_CO"
        | "Form_CO10001"
        | "Form_CO10002"
        | "Form_CO10003"
        | "Form_CO1507"
        | "Form_CO1551"
        | "Form_EC"
        | "Form_ID"
        | "Form_IN"
        | "Form_JP"
        | "Form_JP10000"
        | "Form_JP10001"
        | "Form_KE"
        | "Form_MX"
        | "Form_MX10000"
        | "Form_MY"
        | "Form_NG"
        | "Form_PE"
        | "Form_PH"
        | "Form_TH"
        | "Form_VN", {
        "AccountTypeValues": string
        "BankCode": string
        "CountryCode": string
        "DocumentTypeValues": string
        "FormFields": string
    }>
    "PaymentCurrencyConfig": Partial<Record<FlagId, PaymentCurrency>>
    "OfferConfig": Record<OfferId, OfferConfigValue>
    "OfferGroupConfig": Record<OfferGroupId, OfferGroupValue>
    "OfferShopPositionConfig": Record<OfferShopPositionConfigKeys, OfferShopPositionConfigValue>
}

export enum OfferShopPositionConfigKeys {
    GENERAL_DATE_TIME_OFFER_SHOP_POSITION = "general_date_time_offer_shop_position",
    PERSONAL_LOST_MATCH_OFFER_SHOP_POSITION = "personal_lost_match_offer_shop_position",
    PERSONAL_ONE_SHOW_OFFER_SHOP_POSITION = "personal_one_show_offer_shop_position",
    PERSONAL_ONE_USAGE_OFFER_SHOP_POSITION = "personal_one_usage_offer_shop_position",
    RANDOM_TIME_OFFER1_SHOP_POSITION = "random_time_offer1_shop_position",
    RANDOM_TIME_OFFER2_SHOP_POSITION = "random_time_offer2_shop_position",
    REWARD_OFFER1_SHOP_POSITION = "reward_offer1_shop_position",
    TEST_SHOP_POSITION = "test_shop_position",
    TEST_SHOP_POSITION2 = "test_shop_position2",
}

export type OfferShopPositionConfigValue = {
    "Discount": string
    "OfferId": OfferId,
    "Price[ID_HARD_CURRENCY]": string
    "Price[ID_SOFT_CURRENCY]": string
    "Visible": string
    "currency[ID_BONUS_CURRENCY]": string
    "currency[ID_HARD_CURRENCY]": string
    "currency[ID_SOFT_CURRENCY]": string
};

type OfferGroupValue = {
    "GroupId": string
    "Type": string
    "conditions.currency": string
    "conditions.custom": string
}

export type OfferConfigValue = {
    "DelaySec": string
    "DurationSec": string
    "GroupId": string
    "IsActive": string
    "MaxShowCount": string
    "MaxUsageCount": string
    "Weight": string
    "conditions.currency": string
    "conditions.custom": string
}

export type OfferShop = {
    discount: string;
    offerId: string;
    price: {
        hard: number
        soft: number
    };
    currency: {
        bonus: number
        hard: number
        soft: number
    };
}

export type StoreLevelConfigValue = {
    "Price[ID_EXP]": string
    "RequireMax[ID_LVL]": string
    "RequireMin[ID_LVL]": string
    "Reward[ID_LVL]": string
    "Visible": string
    "levelRewardConfig.currency": string
}

export type DailyRewardConfig = Record<
    'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6' | 'day7',
    ConfigDailyReward
>