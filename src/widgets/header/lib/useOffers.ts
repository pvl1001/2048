import {select, useAppDispatch, useAppSelector} from "app/store";
import {thunkGetOffers, TOffers} from "entities/offer_card";
import {useEffect} from "react";


export type UseOffers = {
    offers: TOffers
}

export function useOffers(): UseOffers {
    let dispatch = useAppDispatch();
    let offers: TOffers = useAppSelector(select.offers._data);

    useEffect(() => {
        dispatch(thunkGetOffers());
    }, []);

    return {offers};
}
