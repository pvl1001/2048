import cn from "classnames";
import s from "../TournamentsCard.module.scss";


type BlockPrizeProps = {
    hasBonus: boolean
    hardCurrency: number
    softCurrency: string | number
}

export function BlockPrize({hardCurrency, softCurrency, hasBonus}: BlockPrizeProps) {
    return (
        <div className={cn(s.block_prize, {
            [s.with_bonus]: hasBonus,
        })}>
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
