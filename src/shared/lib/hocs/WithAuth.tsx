import {PropsWithChildren} from "react";
import {select, useAppSelector} from "app/store";


export function WithAuth({children}: PropsWithChildren) {
    const isAuth: boolean = useAppSelector(select.profile._isAuth);

    return isAuth
        ? children as JSX.Element
        : null;
}
