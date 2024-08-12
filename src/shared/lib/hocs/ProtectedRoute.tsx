import {select, useAppSelector} from "app/store";
import {Navigate, Outlet} from "react-router-dom";


type Props = {
    isAuth: boolean
}

export function ProtectedRoute(props: Props) {
    let profileIsAuth: boolean = useAppSelector(select.profile._isAuth);

    return (props.isAuth ? !profileIsAuth : profileIsAuth)
        ? <Navigate to="/" replace/>
        : <Outlet/>;
}

