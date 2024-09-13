import {select, useAppSelector} from "app/store";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal, UseNavigateModal} from "shared/lib/hooks";
import {ProfileCurrency} from "shared/model/profile";
import {Button} from "shared/ui/button";
import {ModalCurrencies} from "shared/ui/modal";
import s from "./ModalTutorialReward.module.scss";


export function ModalTutorialReward() {
    const {closeModal}: UseNavigateModal = useNavigateModal();
    const modalEvents = useAppSelector(select.modalEvents._events);
    const [currency] = useState<ProfileCurrency | undefined>(modalEvents[RoutePaths.TUTORIAL_REWARD]?.currency);

    if (!currency) return <Navigate to={'/'} replace/>;

    function closeHandler() {
        closeModal();
    }

    return (
        <div className={s._}>
            <p>You have completed the tutorial</p>
            <p>here is your prize:</p>

            <ModalCurrencies
                className={s.complete_cash}
                exp={currency.exp}
                soft={currency.soft}
                formatUniteHard={currency.formatUniteHard}
            />

            <Button
                theme={'orange'}
                className={s.button}
                onClick={closeHandler}
            >Thanks</Button>
        </div>
    );
}
