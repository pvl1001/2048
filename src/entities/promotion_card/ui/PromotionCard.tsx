import {ReactElement} from "react";
import cn from "classnames";
import s from "./PromotionCard.scss";
import {getPromotionCardData, PromotionData} from "../lib/getPromotionCardData";
import {Promotion} from "../types";


type Props = {
    currency: Promotion['currency']
    sku: Promotion['sku']
    action: ReactElement
}

export function PromotionCard({currency, sku, action}: Props) {
    const {id}: PromotionData = getPromotionCardData(sku);
    const {formatBonus, formatHard} = currency;

    return (
        <li className={cn(s._, s[id], {
            [s.popular]: id === 'rookie'
        })}>
            <div className={s.content}>

                <div className={s.image}>
                    <div className={s.currency}>
                        {formatHard}$
                    </div>
                    <p className={s.bonus}>Bonus +{formatBonus}$</p>
                </div>

            </div>

            <div className={s.buy}>
                {action}
            </div>
        </li>
    );
}
