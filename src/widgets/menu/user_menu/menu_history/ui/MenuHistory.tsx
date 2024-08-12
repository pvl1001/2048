import {HistoryCard, Transaction} from "entities/history_card";
import {forwardRef, Ref} from "react";
import {ScrollContent} from "shared/ui/scroll_content";
import {useTransactions} from "../lib/useTransactions";
import s from './MenuHistory.scss';


function MenuHistory({}: {}, ref: Ref<HTMLDivElement>) {
    let transactions: Transaction[] = useTransactions();

    return (
        <ScrollContent ref={ref}>
            <h5 className={s.title}>Your transactions</h5>

            <ul className={s.list}>
                {transactions?.map((transaction: Transaction, i: number) =>
                    <HistoryCard key={i} transaction={transaction}/>
                )}
            </ul>
        </ScrollContent>
    );
}

export default forwardRef(MenuHistory);