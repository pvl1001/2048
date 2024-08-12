import cn from "classnames";
import {ReactComponent as D24Icon} from 'shared/assets/icons/d24.svg';
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {Mask} from "shared/lib/Mask";
import {Button} from "shared/ui/button";
import {ButtonBack} from "shared/ui/button_back";
import {ScrollContent} from "shared/ui/scroll_content";
import s from "./MenuWithdrawOverview.scss";


type MenuWithdrawOverviewProps = {
    amountValue: number
    hardCurrency: number
    bonusCurrency: number
    formatUniteHard: number
    clickBack: () => void
    className?: string
}

function MenuWithdrawOverview({hardCurrency, bonusCurrency, amountValue, clickBack, className, formatUniteHard}: MenuWithdrawOverviewProps) {
    let {navigateModal} = useNavigateModal();
    let amountCurrency = Mask.hardCurrency(amountValue);
    let remainingCurrency = Mask.hardCurrency(hardCurrency - amountValue);

    function openModal() {
        navigateModal(RoutePaths.WITHDRAW, {amount: {"ID_HARD_CURRENCY": amountValue}});
    }

    return (
        <ScrollContent className={cn(className, s._)}>
            <div className={'flex-grow'}>
                <div className={s.title_container}>
                    <ButtonBack className={s.btn_back} onClick={clickBack}/>
                    <h5 className={s.title}>Withdrawal overview</h5>
                </div>

                <div className={cn(s.currency, s.currency_balance)}>
                    <ul className={s.currency__list}>
                        <li>
                            <p>Current balance:</p>
                            <p>{formatUniteHard}$</p>
                        </li>
                        <li>
                            <p>Bonus cash redused:</p>
                            <p>{!!bonusCurrency && '-'}{Mask.hardCurrency(bonusCurrency)}$</p>
                        </li>
                    </ul>
                    <p className={s.currency__footer}>
                        Upon withdrawal, all Bonus cash will be deducted from your balance v
                    </p>
                </div>

                <div className={cn(s.currency, s.currency_amount)}>
                    <ul className={s.currency__list}>
                        <li>
                            <p>Withdrawal amount:</p>
                            <p className={s.green}>{amountCurrency}$</p>
                        </li>
                        <li>
                            <p>Remaining balance:</p>
                            <p>{remainingCurrency}$</p>
                        </li>
                    </ul>
                </div>

                <div className={s.payment}>
                    <div>*Withdrawals available using</div>
                    <div><D24Icon/></div>
                </div>
                <p className={s.description}>*Depending on the selected withdrawal method, different fees may apply</p>
            </div>

            <Button
                theme={'orange'}
                className={s.button_next}
                onClick={openModal}
            >
                Next
            </Button>
        </ScrollContent>
    );
}

export default MenuWithdrawOverview;