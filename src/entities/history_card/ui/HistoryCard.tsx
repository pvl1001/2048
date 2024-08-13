import classNames from "classnames";
import {DateUtils} from "shared/lib/DateUtils";
import {Mask} from "shared/lib/Mask";
import s from "./HistoryCard.scss";
import {Transaction} from "../types";


type HistoryCardProps = {
    transaction: Transaction
}

export function HistoryCard({transaction}: HistoryCardProps) {
    const {created, deltas, cause}: Transaction = transaction;
    const date: string = DateUtils.getDateFromUnix(created).format('DD.MM.YY');
    const title: string = cause.replaceAll('_', ' ');
    const money: number = (deltas.ID_BONUS_CURRENCY ?? 0) + (deltas.ID_HARD_CURRENCY ?? 0);
    const isPlus: boolean = money > 0;
    const className: string = classNames(s.block_money, {
        [s.color_green]: isPlus,
        [s.color_red]: !isPlus,
    });

    return (
        <li className={s._}>
            <div className={s.block_wins}>
                <h5 className={s.title}>{title}</h5>
                <p className={s.date}>{date}</p>
            </div>

            <p className={className}>{isPlus && '+'}{Mask.hardCurrency(money)}$</p>
        </li>
    );
}
