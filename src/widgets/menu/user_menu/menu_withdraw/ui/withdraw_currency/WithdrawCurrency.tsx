import {ProfileCurrency} from "shared/model/profile";
import {TooltipQuestion} from "shared/ui/tooltip_question";
import s from "./WithdrawCurrency.scss";


type WithdrawCurrencyProps = {
    currency: ProfileCurrency
}

function WithdrawCurrency({currency}: WithdrawCurrencyProps) {

    const content: JSX.Element = (
        <div className={s.tooltip__content}>
            <ul className={s.tooltip__list}>
                <li>
                    Bonus cash can be used to participate in
                    tournaments, but cannot be withdrawn.
                </li>
                <li>
                    Winnings gained by using bonus cash
                    can be withdrawn.
                </li>
            </ul>
            <p>Upon withdrawal, all bonus cash are forfeited</p>
        </div>
    );

    return (
        <ul className={s._}>
            <li>
                <p>Account balance:</p>
                <p>{currency.formatUniteHard}$</p>
            </li>
            <li>
                <p>Bonus cash:</p>
                <p>{currency.formatBonus}$</p>
            </li>
            <li>
                <p>Withdrawable amount:</p>
                <p className={s.color_yellow}>
                    {currency.formatHard}$
                    <TooltipQuestion
                        content={content}
                        maxWidth={'41.8rem'}
                        className={s.tooltip}
                    />
                </p>
            </li>
        </ul>
    );
}

export default WithdrawCurrency;