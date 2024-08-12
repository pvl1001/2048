import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {PropsWithChildren, useState} from "react";
import {RoutePaths} from "shared/common/RoutePaths";
import {UseNavigateModal, useNavigateModal} from "shared/lib/hooks";
import {ProfileCurrency} from "shared/model/profile";
import {Button} from "shared/ui/button";


type Props = {
    clickHandler?: () => void
    className?: string
    currency: {
        exp?: ProfileCurrency['exp'],
        soft?: ProfileCurrency['soft'],
        formatUniteHard?: ProfileCurrency['formatUniteHard'],
    }
}

export function Claim({currency, className, clickHandler, children}: PropsWithChildren<Props>) {
    let [isClaimed, setIsClaimed] = useState(false);
    let isPending: boolean = useAppSelector(select.profile._isPending);
    let {navigateEventModal}: UseNavigateModal = useNavigateModal();

    async function claimHandler() {
        // await buyItem(buyStoreItem);
        navigateEventModal(RoutePaths.SUCCESS, {currency});
        setIsClaimed(true);
        clickHandler?.();
    }

    return (
        <Button
            theme={'orange'}
            className={cn(className)}
            onClick={claimHandler}
            isPending={isPending}
            disabled={isClaimed}
        >
            {children || 'CLAIM'}
        </Button>
    );
}
