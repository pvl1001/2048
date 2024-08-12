import {select, useAppSelector} from "app/store";
import {PropsWithChildren} from "react";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {Button} from "shared/ui/button";


type Props = {
    sku: string
    bonusCurrency: number
    hardCurrency: number
}

export function OpenModalDeposit({sku, bonusCurrency, hardCurrency, children}: PropsWithChildren<Props>) {
    let {navigateModal, navigateEventModal} = useNavigateModal();
    let isAuth: boolean = useAppSelector(select.profile._isAuth);

    function clickHandler() {
        if (!isAuth) {
            return navigateModal(RoutePaths.REGISTRATION);
        }
        navigateEventModal(RoutePaths.DEPOSIT_INFO, {
            sku,
            bonusCurrency,
            hardCurrency,
        }, true);
    }

    return (
        <Button theme={'orange'} onClick={clickHandler}>
            {children}
        </Button>
    );
}
