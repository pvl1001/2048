import {select, useAppSelector} from "app/store";
import {useCallback, useEffect, useState} from "react";
import {useDebounce} from "shared/lib/hooks";
import {ApiProfileMenu} from "../api/ApiProfileMenu";
import {LocalErrors} from "./LocalErrors";


export type UseCheckName = {
    error: string
    isPending: boolean
}

export function useCheckName(name: string): UseCheckName {
    let debounceName: string = useDebounce(name, 500);
    let config = useAppSelector(select.config._designInt);
    let [error, setError] = useState('');
    let [isPending, setIsPending] = useState(false);
    let [init, setInit] = useState(false);

    let checkName = useCallback(async () => {
        try {
            setIsPending(true);
            await ApiProfileMenu.checkName(name);
            setError('');
        } catch (err) {
            let error = LocalErrors.nickname(err, {
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
