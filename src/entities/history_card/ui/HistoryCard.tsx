import classNames from "classnames";
import {DateUtils} from "shared/lib/DateUtils";
import {Mask} from "shared/lib/Mask";
import {Transaction} from "../types";
import s from "./HistoryCard.scss";


type HistoryCardProps = {
    transaction: Transaction
}

export function HistoryCard({transaction}: HistoryCardProps) {
    let {created, deltas, cause}: Transaction = transaction;
    let date: string = DateUtils.getDateFromUnix(created).format('DD.MM.YY');
    let title: string = cause.replaceAll('_', ' ');
    let money: number = (deltas.ID_BONUS_CURRENCY ?? 0) + (deltas.ID_HARD_CURRENCY ?? 0);
    let isPlus: boolean = money > 0;
    let className: string = classNames(s.block_money, {
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
