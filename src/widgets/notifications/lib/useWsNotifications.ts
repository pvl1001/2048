import {select, useAppDispatch, useAppSelector} from "app/store";
import {wsNotificationActions} from "entities/notification";
import {useEffect} from "react";
import {Cookie} from "shared/lib/Cookie";


function useWsNotifications() {
    let dispatch = useAppDispatch();
    let token = Cookie.get('token');
    let status = useAppSelector(select.wsNotification._socketStatus);

    useEffect(() => {
        if (token) {
            status === 'open' && dispatch(wsNotificationActions.close());
            setTimeout(() => {
                dispatch(wsNotificationActions.connect(process.env.WS_URL));
            }, 300);
        }
        // return () => {
        //     dispatch(wsActions.close());
        // };
    }, [token]);
}

export default useWsNotifications;