import {historyReducer} from "entities/history_card";
import {wsNotificationReducer} from "entities/notification";
import {offersReducer} from "entities/offer_card";
import {promotionsReducer} from "entities/promotion_card";
import {playersResultsReducer} from "entities/result_card";
import {tournamentsReducer} from "entities/tournaments_card";
import {registrationReducer} from "features/auth";
import {withdrawReducer} from "features/withdraw_forms";
import {flagsReducer} from "shared/model/flags";
import {globalConfigReducer} from "shared/model/global_config";
import {profileReducer} from "shared/model/profile";
import {modalEventsReducer} from "shared/ui/modal";


export const reducers = {
    profile: profileReducer,
    playersResults: playersResultsReducer,
    promotions: promotionsReducer,
    tournaments: tournamentsReducer,
    history: historyReducer,
    registration: registrationReducer,
    flags: flagsReducer,
    withdraw: withdrawReducer,
    modalEvents: modalEventsReducer,
    wsNotification: wsNotificationReducer,
    offers: offersReducer,
    globalConfig: globalConfigReducer,
};
