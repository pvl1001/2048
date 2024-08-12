import {select, useAppDispatch, useAppSelector} from "app/store";
import {useEffect} from "react";
import {thunkGetGlobalConfig} from "shared/model/global_config";


export function useGlobalConfig(): boolean {
    let dispatch = useAppDispatch();
    let isGlobalConfig: boolean = useAppSelector(select.config._isSuccess);

    function getGlobalConfig(): void {
        dispatch(thunkGetGlobalConfig());
    }

    useEffect(() => {
        getGlobalConfig();
    }, []);

    return isGlobalConfig;
}

