import {Promotion, PromotionCard, usePromotions, UsePromotions} from "entities/promotion_card";
import {OpenModalDeposit} from "features/open_modal_deposit";
import CoinSrc from 'shared/assets/icons/coin.png';
import s from "./Promotions.scss";


export function Promotions() {
    const {promotions}: UsePromotions = usePromotions();
    // let {currencyName}: UsePaymentCurrency = usePaymentCurrency();

    if (!promotions) return null;
    return (
        <section className={s._} id={'promotions'}>
            <div className="wrapper">
                <h2 className={s.title}>Promotions</h2>

                <p className={s.bonus_deposit}>
                    Get <img className={s.bonus_deposit__img} src={CoinSrc} alt="coin"/> <span className={s.bonus_deposit__coin_count}>20</span> for every <b>1$</b> you deposit!
                </p>

                <ul className={s.list}>
                    {promotions.map((promotion: Promotion) =>
                        <PromotionCard
                            key={promotion.sku}
                            sku={promotion.sku}
                            currency={promotion.currency}
                            action={
                                <OpenModalDeposit
                                    sku={promotion.sku}
                                    bonusCurrency={promotion.currency.formatBonus}
                                    hardCurrency={promotion.currency.formatHard}
                                >Deposit</OpenModalDeposit>
                            }
                        />
                    )}
                </ul>

                <p className={s.description}>*All prices are in USA</p>
            </div>
        </section>
    );
}
