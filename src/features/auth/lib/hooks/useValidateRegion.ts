import {useEffect, useState} from "react";
import {select, useAppSelector} from "app/store";
import {RoutePaths} from "shared/common/RoutePaths";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {useNavigateModal} from "shared/lib/hooks/useNavigateModal";
import {Api} from "../../api/Api";
import {FlagId} from "../../types";


export type UseValidateRegion = {
    isPending: boolean
}

export function useValidateRegion(): UseValidateRegion {
    const {navigateModal} = useNavigateModal();
    const regionConfig = useAppSelector(select.config._region);
    const [isPending, setIsPending] = useState(false);

    async function onValidateRegion(): Promise<void> {
        try {
            setIsPending(true);
            const region: FlagId = await Api.validateRegion();
            if (!regionConfig.keys.includes(region)) {
                throw Error('invalid region');
            }
        } catch (err) {
            console.error(getErrorMessage(err));
            navigateModal(RoutePaths.ERR_REGION);
        } finally {
            setIsPending(false);
        }
    }

    useEffect(() => {
        onValidateRegion();
    }, []);

    return {isPending};
}
