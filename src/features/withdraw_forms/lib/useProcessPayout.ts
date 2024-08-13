import {Dispatch, useMemo, useState} from "react";
import {Api} from "../api/Api";


export type UseProcessPayout = {
    isPending: boolean
    isProcessDisabled: boolean
}

type Props = {
    isWithdrawFinish: boolean
    setApiError: Dispatch<string>
}

export function useProcessPayout({isWithdrawFinish, setApiError}: Props) {
    const [isPending, setIsPending] = useState(false);
    const [isProcessDisabled, setIsProcessDisabled] = useState(false);

    async function checkProcessPayout() {
        try {
            setIsPending(true);
            const {profile} = await Api.processPayout();
            if (profile.money.ST_PAYOUT_STATUS < 3) {
                throw Error();
            }
            setIsProcessDisabled(false);
        } catch (err) {
            setIsProcessDisabled(true);
            setApiError('Only one withdrawal can processed at a time');
        } finally {
            setIsPending(false);
        }
    }

    // useMemo(checkProcessPayout, []);

    useMemo(() => {
        isWithdrawFinish && checkProcessPayout();
    }, [isWithdrawFinish]);

    return {
        isPending,
        isProcessDisabled
    };
}
