import {Navigate, Outlet} from "react-router-dom";
import {select, useAppSelector} from "app/store";


type Props = {
    isAuth: boolean
}

export function ProtectedRoute(props: Props) {
    const profileIsAuth: boolean = useAppSelector(select.profile._isAuth);

    return (props.isAuth ? !profileIsAuth : profileIsAuth)
        ? <Navigate to="/" replace/>
        : <Outlet/>;
}

