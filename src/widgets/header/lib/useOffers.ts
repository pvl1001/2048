import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {thunkGetOffers, TOffers} from "entities/offer_card";


export type UseOffers = {
    offers: TOffers
}

export function useOffers(): UseOffers {
    const dispatch = useAppDispatch();
    const offers: TOffers = useAppSelector(select.offers._data);

    useEffect(() => {
        dispatch(thunkGetOffers());
    }, []);

    return {offers};
}
