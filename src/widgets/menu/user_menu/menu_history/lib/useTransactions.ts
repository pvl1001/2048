import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {thunkGetTransactions, Transaction} from "entities/history_card";


export function useTransactions(): Transaction[] {
    const dispatch = useAppDispatch();
    const transactions: Transaction[] = useAppSelector(select.history._data);

    useEffect(() => {
        dispatch(thunkGetTransactions());
    }, []);

    return transactions;
}
