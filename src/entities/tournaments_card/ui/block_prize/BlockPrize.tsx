import cn from "classnames";
import {Mask} from "shared/lib/Mask";
import {Reward} from "../../types";
import s from "../TournamentsCard.module.scss";


type BlockPrizeProps = {
    currency: Reward['currency']
}

export function BlockPrize({currency}: BlockPrizeProps) {
    const {ID_SOFT_CURRENCY, ID_HARD_CURRENCY, ID_BONUS_CURRENCY} = currency;

    const blockPrizeClass = ID_BONUS_CURRENCY ? s.with_bonus : ID_HARD_CURRENCY && ID_SOFT_CURRENCY ? s.with_coin : '';
    const hardCurrency: number = Mask.hardCurrency(ID_BONUS_CURRENCY || ID_HARD_CURRENCY);
    const softCurrency: string | number = Mask.softCurrency(ID_SOFT_CURRENCY);

    return (
        <div className={cn(s.block_prize, blockPrizeClass)}>
            <div className={s.currency}>

                {!!hardCurrency &&
                    <div className={s.currency__money}>
                        {hardCurrency}
                    </div>
                }

                {!!softCurrency &&
                    <div className={s.currency__coin}>
                        {softCurrency}
                    </div>
                }
            </div>
            <p className={s.currency__text}>PRIZE POOL</p>
        </div>
    );
}
