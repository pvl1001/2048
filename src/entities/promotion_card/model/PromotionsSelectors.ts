import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "app/store";
import {FlagId} from "features/auth";
import {GlobalConfigSelectors} from "shared/model/global_config";
import {ProfileSelectors} from "shared/model/profile";


export class PromotionsSelectors {
    static _data = (state: RootState) => state.promotions.data;

    static _currency = createSelector(
        [GlobalConfigSelectors._paymentCurrencyConfig, ProfileSelectors._registrationCountryCode],
        (paymentCurrencyConfig, profileCountryCode) => {
            return paymentCurrencyConfig[profileCountryCode as FlagId];
        }
    );
}
