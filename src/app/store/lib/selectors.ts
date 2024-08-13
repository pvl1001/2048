import {HistorySelectors} from "entities/history_card";
import {NotificationSelectors} from "entities/notification";
import {OffersSelectors} from "entities/offer_card";
import {PromotionsSelectors} from "entities/promotion_card";
import {PlayersResultsSelectors} from "entities/result_card";
import {TournamentsSelectors} from "entities/tournaments_card";
import {RegistrationSelectors} from "features/auth";
import {WithdrawSelectors} from "features/withdraw_forms";
import {FlagsSelectors} from "shared/model/flags";
import {GlobalConfigSelectors} from "shared/model/global_config";
import {ProfileSelectors} from "shared/model/profile";
import {ModalEventsSelectors} from "shared/ui/modal";


export const select = {
    profile: ProfileSelectors,
    playersResults: PlayersResultsSelectors,
    promotions: PromotionsSelectors,
    tournaments: TournamentsSelectors,
    history: HistorySelectors,
    registration: RegistrationSelectors,
    flags: FlagsSelectors,
    withdraw: WithdrawSelectors,
    modalEvents: ModalEventsSelectors,
    wsNotification: NotificationSelectors,
    offers: OffersSelectors,
    config: GlobalConfigSelectors,
};
