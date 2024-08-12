import {select, useAppDispatch, useAppSelector} from "app/store";
import {thunkGetTransactions, Transaction} from "entities/history_card";
import {useEffect} from "react";


export function useTransactions(): Transaction[] {
    let dispatch = useAppDispatch();
    let transactions: Transaction[] = useAppSelector(select.history._data);

    useEffect(() => {
        dispatch(thunkGetTransactions());
    }, []);

    return transactions;
}
