import {select, useAppSelector} from "app/store";
import {PropsWithChildren} from "react";


export function WithAuth({children}: PropsWithChildren) {
    let isAuth: boolean = useAppSelector(select.profile._isAuth);

    return isAuth
        ? children as JSX.Element
        : null;
}
