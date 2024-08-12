import {CurrencyId} from "shared/api/server_service";
import {Mask} from "shared/lib/Mask";
import {Currency} from "shared/ui/currency";
import s from "./PlayerCardPrize.scss";


type PlayerCardPrizeProps = {
    rewards: Partial<CurrencyId>
}

function PlayerCardPrize({rewards}: PlayerCardPrizeProps) {
    let {
        ID_SOFT_CURRENCY,
        ID_HARD_CURRENCY,
        ID_BONUS_CURRENCY
    } = rewards;
    let hardCurrency: number = Mask.hardCurrency((ID_HARD_CURRENCY || 0) + (ID_BONUS_CURRENCY || 0));
    let softCurrency: string | number = Mask.softCurrency(ID_SOFT_CURRENCY);

    return (
        <div className={s._}>
            <p className={s.title}>Prize:</p>

            <div className={s.block_currency}>
                {!!softCurrency &&
                    <Currency currency={'coin'}>{softCurrency}</Currency>
                }
                {!!hardCurrency &&
                    <Currency currency={'money'}>{hardCurrency}</Currency>
                }
            </div>
        </div>
    );
}

export default PlayerCardPrize;