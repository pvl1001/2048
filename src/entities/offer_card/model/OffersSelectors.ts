import {RootState} from "app/store";
import {RoutePaths} from "shared/common/RoutePaths";


export class OffersSelectors {
    static _data = (state: RootState) => state.offers.data;
    static _firstOfferPath = (state: RootState) => Object.keys(state.offers.data)[0] as RoutePaths;
}
