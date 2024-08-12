import {CurrencyId} from "shared/api/server_service";
import giftImg from 'shared/assets/icons/gift.svg';
import {Mask} from "shared/lib/Mask";
import {Currency} from "shared/ui/currency";
import s from "./CardYouWon.scss";


type CardYouWonProps = {
    rewards: Partial<CurrencyId>
}

export function CardYouWon({rewards}: CardYouWonProps) {
    let {ID_HARD_CURRENCY, ID_BONUS_CURRENCY, ID_SOFT_CURRENCY} = rewards;
    let hardCurrency = Mask.hardCurrency((ID_HARD_CURRENCY || 0) + (ID_BONUS_CURRENCY || 0));
    let softCurrency = Mask.softCurrency(ID_SOFT_CURRENCY || 0);

    return (
        <div className={s._}>

            <img className={s.gift} src={giftImg} alt="gift"/>
            <p className={s.text}>You won:</p>

            <div className={s.block_currency}>

                {!!hardCurrency &&
                    <Currency
                        currency={'money'}
                        textColor={'gold'}
                    >{hardCurrency}</Currency>
                }

                {!!(hardCurrency && softCurrency) && <hr className={s.hr}/>}

                {!!softCurrency &&
                    <Currency
                        currency={'coin'}
                        textColor={'white'}
                    >{softCurrency}</Currency>
                }
            </div>

        </div>
    );
}
