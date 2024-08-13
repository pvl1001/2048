import {useCallback, useEffect, useState} from "react";
import {select, useAppSelector} from "app/store";
import {useDebounce} from "shared/lib/hooks";
import {LocalErrors} from "./LocalErrors";
import {ApiProfileMenu} from "../api/ApiProfileMenu";


export type UseCheckName = {
    error: string
    isPending: boolean
}

export function useCheckName(name: string): UseCheckName {
    const debounceName: string = useDebounce(name, 500);
    const config = useAppSelector(select.config._designInt);
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [init, setInit] = useState(false);

    const checkName = useCallback(async () => {
        try {
            setIsPending(true);
            await ApiProfileMenu.checkName(name);
            setError('');
        } catch (err) {
            const error = LocalErrors.nickname(err, {
                min: config.minNicknameLength,
                max: config.maxNicknameLength,
            });
            setError(error);
        } finally {
            setIsPending(false);
        }
    }, [debounceName]);

    useEffect(() => {
        if (init) {
            checkName();
        }
        !init && setInit(true);
    }, [checkName]);

    return {error, isPending};
}
