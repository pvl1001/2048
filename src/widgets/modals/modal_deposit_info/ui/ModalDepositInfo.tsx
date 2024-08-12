import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {CreateDepositPayin} from "features/create_deposit_payin";
import {useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {RoutePaths} from "shared/common/RoutePaths";
import {ProfileCurrency} from "shared/model/profile";
import {Checkbox} from "shared/ui/checkbox";
import {TooltipQuestion} from "shared/ui/tooltip_question";
import s from "./ModalDepositInfo.module.scss";


export function ModalDepositInfo() {
    let location = useLocation();
    let currentEvent = useAppSelector(select.modalEvents._getCurrentEvent(location.pathname as RoutePaths));
    let [deposit] = useState(currentEvent);

    if (!deposit) {
        return <Navigate to={'/'}/>;
    }

    let {hardCurrency, bonusCurrency, sku} = deposit;
    let links = useAppSelector(select.config._links);
    let profileCurrency: ProfileCurrency = useAppSelector(select.profile._currency);
    let totalCurrency: string = (profileCurrency.formatUniteHard + hardCurrency + (bonusCurrency ?? 0)).toFixed(1);
    let [isCheck, setIsCheck] = useState(false);

    return (
        <div className={s._}>
            <ul className={s.info_list}>
                <li className={s.info_item}>
                    <p className={s.info_key}>Deposit amount:</p>
                    <p className={s.info_value}>{hardCurrency}$</p>
                </li>

                {!!bonusCurrency && <li className={s.info_item}>
                    <p className={s.info_key}>Bonus cash:</p>
                    <div className={s.info_value}>{bonusCurrency}$
                        <TooltipQuestion
                            className={s.tooltip}
                            content={
                                <p className={s.tooltip_content}>
                                    Bonus Cash can be used to participate in tournaments but can't be withdrawn. Winnings gained by using Bonus Cash can be withdrawn
                                </p>
                            }/>
                    </div>
                </li>}
            </ul>

            <div className={cn(s.balance, s.info_list, s.info_item)}>
                <p>New balance:</p>
                <p className={s.info_value}>{totalCurrency}$</p>
            </div>

            <div className={s.terms}>
                <Checkbox onChange={e => setIsCheck(e.target.checked)}/>
                <p>By continuing, I state that I am over 18 years old, and agree to the <a target={'_blank'} href={links.termsOfService}>Terms and Conditions.</a></p>
            </div>

            <CreateDepositPayin
                sku={sku}
                isCheck={isCheck}
                className={s.checkout_button}
            />
        </div>
    );
}
