import {select, useAppSelector} from "app/store";
import {Offer, TOffers} from "entities/offer_card";
import {useEffect, useState} from "react";
import {RoutePaths} from "shared/common/RoutePaths";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {useNavigateModal, useTutorial, UseTutorial} from "shared/lib/hooks";
import {ProfileDailyRewards} from "shared/model/profile";


/** Проверить доступные награды при загрузке страницы.
 * Показ модальных окон при доступных наградах */
export function useModalEvents() {
    let {navigateEventModal, navigateModal} = useNavigateModal();
    let hasLevelUp: boolean = useAppSelector(select.profile._hasLevelUp);
    let dailyRewards: ProfileDailyRewards = useAppSelector(select.profile._dailyRewards);
    let hasLevelRewards: boolean = !!useAppSelector(select.profile._levelRewards).length;
    let modalEvents = useAppSelector(select.modalEvents._events);
    let hasProfile: boolean = useAppSelector(select.profile._hasProfile);
    let {isTutorial}: UseTutorial = useTutorial();
    let [init, setInit] = useState(false);
    let currentModalEvent = Object.keys(modalEvents)[0] as RoutePaths;
    let offers: TOffers = useAppSelector(select.offers._data);
    let isPlayedGame: boolean = /\?token/.test(document.referrer); // после игры

    async function unclaimed() {
        try {
            // let rewards: UnclaimedResponse = await ServerService.getUnclaimed();
            // let rewardIds: number[] = rewards.map(r => r.rewardId);
            // if (rewardIds.length) {
            //     await getClaim({rewardIds});
            // }
        } catch (err: unknown) {
            console.log(getErrorMessage(err));
        }
    }

    function setEvents() { // записать событие
        if (hasLevelUp) navigateEventModal(RoutePaths.LEVEL_UP);
        if (hasLevelRewards) navigateEventModal(RoutePaths.LEVEL_PROGRESS);
        if (isPlayedGame && dailyRewards.currentReward) navigateEventModal(RoutePaths.DAILY_REWARDS);
    }

    useEffect(() => {
        setTimeout(() => {
            if (hasProfile && !init) {
                if (isTutorial) { // показать туториал
                    navigateEventModal(RoutePaths.REGISTRATION_SUCCESS);
                    navigateEventModal(RoutePaths.TUTORIAL);
                    return;
                }
                unclaimed() // проверить и получить возможные награды
                    .then(setEvents)
                    .then(() => setInit(true));
            }
        }, 600);
    }, [hasProfile, isTutorial]);

    useEffect(() => {
        if (init && hasLevelUp) {
            navigateEventModal(RoutePaths.LEVEL_UP);
        }
    }, [init, hasLevelUp]);

    useEffect(() => {
        if (init && hasLevelRewards) {
            navigateEventModal(RoutePaths.LEVEL_PROGRESS);
        }
    }, [init, hasLevelRewards]);

    useEffect(() => { // показать офферы
        if (init && !isTutorial && offers) {
            for (let offerPath in offers) {
                let offer: Offer = offers[offerPath as keyof typeof offers];
                let isOneOffOffer: boolean = !offer.deadlineTs;
                if (isOneOffOffer && !isPlayedGame) continue; // одноразовые офферы показать после игры
                navigateEventModal(offerPath);
            }
        }
    }, [init, isTutorial]);

    useEffect(() => { // перейти к следующему событию
        if ((init || isTutorial) && currentModalEvent) {
            navigateModal(currentModalEvent, {pathname: currentModalEvent});
        }
    }, [init, currentModalEvent, isTutorial]);
}
