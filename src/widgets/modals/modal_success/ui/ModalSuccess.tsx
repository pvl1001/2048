import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {useEffect, useState} from "react";
import SuccessIcon from 'shared/assets/icons/success.svg?react';
import {RoutePaths} from "shared/common/RoutePaths";
import {UseNavigateModal, useNavigateModal} from "shared/lib/hooks";
import {ProfileCurrency} from "shared/model/profile";
import {Button} from "shared/ui/button";
import {ModalCurrencies} from "shared/ui/modal";
import s from './ModalSuccess.module.scss';


type ModalSuccessProps = {
    message?: JSX.Element | string
    buttonText?: string
    unmounted?: () => void
}

export function ModalSuccess({buttonText, unmounted, ...props}: ModalSuccessProps) {
    const {navigateEventModal, closeModal}: UseNavigateModal = useNavigateModal();
    const modalEvents = useAppSelector(select.modalEvents._events);
    const [currency] = useState<ProfileCurrency | undefined>(modalEvents[RoutePaths.SUCCESS]?.currency);
    const [message] = useState<string>(props.message || modalEvents[RoutePaths.SUCCESS]?.message);
    const navigateTo = modalEvents[RoutePaths.SUCCESS]?.navigateTo;

    useEffect(() => {
        if (navigateTo) {
            navigateEventModal(navigateTo, modalEvents[RoutePaths.SUCCESS]);
        }

        return () => {
            unmounted?.();
        };
    }, []);

    return (
        <div className={cn(s._, {
            [s._with_cash]: !!currency
        })}>

            {!currency &&
                <SuccessIcon className={s.icon}/>
            }

            <p className={s.description}>
                {message}
            </p>

            {currency &&
                <ModalCurrencies
                    className={s.complete_cash}
                    exp={currency.exp}
                    soft={currency.soft}
                    formatUniteHard={currency.formatUniteHard}
                />
            }

            <Button className={s.thanks_button} onClick={closeModal}>
                {buttonText || 'OK'}
            </Button>
        </div>
    );
}
