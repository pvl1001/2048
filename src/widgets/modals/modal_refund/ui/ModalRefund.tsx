import {select, useAppSelector} from "app/store";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import {RoutePaths} from "shared/common/RoutePaths";
import {UseNavigateModal, useNavigateModal} from "shared/lib/hooks";
import {ProfileCurrency} from "shared/model/profile";
import {Button} from "shared/ui/button";
import {CurrencyWithImg} from "shared/ui/modal";
import s from "./ModalRefund.module.scss";


export function ModalRefund() {
    let {closeModal}: UseNavigateModal = useNavigateModal();
    let modalEvents = useAppSelector(select.modalEvents._events);
    let [currency] = useState<ProfileCurrency>(modalEvents[RoutePaths.REFUND]?.currency);

    if (!currency) return <Navigate to={'/'} replace/>;

    return (
        <div className={s._}>
            <p>There are no players for the Star Game tournament</p>
            <p>We refund your entry price:</p>

            <CurrencyWithImg currency={{
                soft: currency.soft,
                formatUniteHard: currency.formatUniteHard
            }} className={s.currency_block}/>

            <Button
                theme={'orange'}
                className={s.button}
                onClick={closeModal}
            >Claim</Button>
        </div>
    );
}
