import {useAppDispatch} from "app/store";
import {Offer, thunkGetOffers} from "entities/offer_card";
import {useEffect} from "react";

// Уведомить сервер о просмотре оффера и запросить актуальные офферы при размонтировании
export function useOfferShowed(offer: Offer | undefined) {
    let dispatch = useAppDispatch();

    useEffect(() => {
        if (offer) {
            // записать, что оффер просмотрен
            // Api.postAckOffers([offer.id]);

            return () => {
                // получить актуальные данные офферов
                dispatch(thunkGetOffers());
            };
        }

    }, []);
}
