import {Outlet} from "react-router-dom";
import * as Hooks from "shared/lib/hooks";
import {useModalEvents} from "shared/ui/modal";


export function Layout() {
    Hooks.useGetProfile();
    Hooks.useShowRegisterNow();
    useModalEvents();
    // useUpdateProfileWithNotifications();

    return <Outlet/>;
}
