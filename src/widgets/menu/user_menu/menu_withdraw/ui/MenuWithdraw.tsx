import {forwardRef, Ref, useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {WithdrawAmountForm} from "features/withdraw_forms";
import {RoutePaths} from "shared/common/RoutePaths";
import {ProfileCurrency} from "shared/model/profile";
import {ScrollContent} from "shared/ui/scroll_content";
import MenuWithdrawOverview from "./menu_withdraw_overview/MenuWithdrawOverview";
import s from './MenuWithdraw.scss';
import WithdrawCurrency from "./withdraw_currency/WithdrawCurrency";
import WithdrawInfo from "./withdraw_info/WithdrawInfo";


function MenuWithdraw({}, ref: Ref<HTMLDivElement>) {
    const location = useLocation();
    const profileCurrency: ProfileCurrency = useAppSelector(select.profile._currency);
    const [amountValue, setAmountValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);
    const overviewRef = useRef(null);
    const {hard, bonus, formatUniteHard}: ProfileCurrency = profileCurrency;
    const isWithdrawFinish: boolean = !!location.state?.isWithdrawFinish;

    useEffect(() => {
        if (isWithdrawFinish) {
            setIsSubmit(false);
        }
    }, [isWithdrawFinish]);

    return (
        <div className={s._}>
            <ScrollContent ref={ref} className={cn(s.scroll_content)}>
                <div className={s.container}>
                    <WithdrawCurrency currency={profileCurrency}/>
                    <WithdrawAmountForm
                        amountCurrency={hard}
                        setIsSubmit={setIsSubmit}
                        setAmountValue={setAmountValue}
                        isWithdrawFinish={isWithdrawFinish}
                    />
                    <p className={s.link_container}>Need help? <Link to={RoutePaths.SUPPORT} className={s.link}>TAP HERE</Link></p>
                    <WithdrawInfo/>
                </div>
            </ScrollContent>

            <CSSTransition
                in={isSubmit}
                ref={overviewRef}
                classNames={'transition-context-menu'}
                timeout={200}
                unmountOnExit
            ><MenuWithdrawOverview
                className={s.container}
                amountValue={amountValue}
                hardCurrency={hard}
                bonusCurrency={bonus}
                formatUniteHard={formatUniteHard}
                clickBack={() => setIsSubmit(false)}
            /></CSSTransition>
        </div>
    );
}

export default forwardRef(MenuWithdraw);