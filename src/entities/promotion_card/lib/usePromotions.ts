import {select, useAppDispatch, useAppSelector} from "app/store";
import {useEffect} from "react";
import {thunkGetPromotions} from "../model/PromotionsThunks";
import {Promotion} from "../types";


export type UsePromotions = {
    promotions: Promotion[]
}

export function usePromotions(): UsePromotions {
    let dispatch = useAppDispatch();
    let promotions: Promotion[] = useAppSelector(select.promotions._data);

    useEffect(() => {
        if (!promotions.length) {
            dispatch(thunkGetPromotions());
        }
    }, []);

    return {promotions};
}
