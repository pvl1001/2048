import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {thunkGetGlobalConfig} from "shared/model/global_config";


export function useGlobalConfig(): boolean {
    const dispatch = useAppDispatch();
    const isGlobalConfig: boolean = useAppSelector(select.config._isSuccess);

    function getGlobalConfig(): void {
        dispatch(thunkGetGlobalConfig());
    }

    useEffect(() => {
        getGlobalConfig();
    }, []);

    return isGlobalConfig;
}

