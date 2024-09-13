import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {wsNotificationActions} from "entities/notification";
import {Cookie} from "shared/lib/Cookie";


function useWsNotifications() {
    const dispatch = useAppDispatch();
    const token = Cookie.get('token');
    const status = useAppSelector(select.wsNotification._socketStatus);

    useEffect(() => {
        if (token) {
            status === 'open' && dispatch(wsNotificationActions.close());
            setTimeout(() => {
                dispatch(wsNotificationActions.connect(import.meta.env.WS_URL));
            }, 300);
        }
        // return () => {
        //     dispatch(wsActions.close());
        // };
    }, [token]);
}

export default useWsNotifications;