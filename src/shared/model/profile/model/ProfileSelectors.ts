import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "app/store";
import {TWithdrawFormConfig} from "shared/api/adapters";
import {StatusRequest} from "shared/common/StatusRequest";
import {defaultAvatar} from "shared/lib/avatarNames";
import {GlobalConfigSelectors} from "shared/model/global_config";
import {defaultCurrency, defaultDailyRewards} from "../lib/const";


export class ProfileSelectors {
    static _hasProfile = (state: RootState) => state.profile.data !== null;
    static _isAuth = (state: RootState) => state.profile.isAuth;
    static _isPending = (state: RootState) => state.profile.status === StatusRequest.PENDING;
    static _id = (state: RootState) => state.profile.data?.id ?? '';
    static _email = (state: RootState) => state.profile.data?.properties.email ?? '';
    static _hasLevelUp = (state: RootState) => state.profile.data?.hasLevelUp ?? false;
    static _registrationCountryCode = (state: RootState) => state.profile.data?.properties.registrationCountryCode ?? 'US';
    static _level = (state: RootState) => state.profile.data?.level ?? 0;
    static _exp = (state: RootState) => state.profile.data?.exp ?? 0;
    static _referralCode = (state: RootState) => state.profile.data?.properties.referralCode ?? '';
    static _dailyGiftTkn = (state: RootState) => state.profile.data?.money.ID_DAILY_GIFT_TKN ?? 0;
    static _inviteRewards = (state: RootState) => state.profile.data?.money.ID_INVITE_REWARDS_COUNT ?? 0;
    static _avatarId = (state: RootState) => state.profile.data?.avatarId ?? defaultAvatar;
    static _name = (state: RootState) => state.profile.data?.name ?? '';
    static _levelRewards = (state: RootState) => state.profile.data?.levelRewards ?? [];
    static _currency = (state: RootState) => state.profile.data?.currency ?? defaultCurrency;
    static _dailyRewards = (state: RootState) => state.profile.data?.dailyRewards ?? defaultDailyRewards;

    static _progressPercent = createSelector(
        [GlobalConfigSelectors._storeLevelConfig, GlobalConfigSelectors._storeLevelConfig, this._level, this._exp],
        ({data: storeLevelConfig}, {maxLevel}, level, exp): number => {
            const configExp: number = storeLevelConfig[level + 1]?.exp;
            return level === maxLevel ? 100 : exp !== 0 ? exp / configExp * 100 : 0;
        }
    );

    static _withdrawFormConfig = (bankCode: string) => createSelector(
        [GlobalConfigSelectors._payoutFormConfig, this._registrationCountryCode],
        (payoutFormConfig, registrationCountryCode): TWithdrawFormConfig => {
            const countryForms: TWithdrawFormConfig[] = Object.values(payoutFormConfig).filter(f => f.CountryCode === registrationCountryCode);

            return countryForms.find(f => f.BankCode == bankCode) as TWithdrawFormConfig
                ?? countryForms.find(f => f.BankCode == '');
        }
    );
}
