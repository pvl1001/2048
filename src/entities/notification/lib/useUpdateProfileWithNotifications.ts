import {select, useAppDispatch, useAppSelector} from "app/store";
import {useEffect} from "react";
import {useDebounce} from "shared/lib/hooks";
import {thunkGetProfile} from "shared/model/profile";
import {TNotification} from "../types";

// Обновить данные профиля после обновления уведомлений
export function useUpdateProfileWithNotifications() {
    let dispatch = useAppDispatch();
    let notifications: TNotification[] = useAppSelector(select.wsNotification._data);
    let debounceNotificationsLength: string = useDebounce(String(notifications.length), 500);

    useEffect(() => {
        let hasMatchResult: boolean = notifications.some((el: TNotification) => el.matchState === 'finished');
        if (hasMatchResult) {
            dispatch(thunkGetProfile());
        }
    }, [debounceNotificationsLength]);
}
