import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {thunkGetPromotions} from "../model/PromotionsThunks";
import {Promotion} from "../types";


export type UsePromotions = {
    promotions: Promotion[]
}

export function usePromotions(): UsePromotions {
    const dispatch = useAppDispatch();
    const promotions: Promotion[] = useAppSelector(select.promotions._data);

    useEffect(() => {
        if (!promotions.length) {
            dispatch(thunkGetPromotions());
        }
    }, []);

    return {promotions};
}
