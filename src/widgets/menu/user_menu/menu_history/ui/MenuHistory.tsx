import {forwardRef, Ref} from "react";
import {HistoryCard, Transaction} from "entities/history_card";
import {ScrollContent} from "shared/ui/scroll_content";
import s from './MenuHistory.scss';
import {useTransactions} from "../lib/useTransactions";


function MenuHistory({}: {}, ref: Ref<HTMLDivElement>) {
    const transactions: Transaction[] = useTransactions();

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