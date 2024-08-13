import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {useDebounce} from "shared/lib/hooks";
import {thunkGetProfile} from "shared/model/profile";
import {TNotification} from "../types";

// Обновить данные профиля после обновления уведомлений
export function useUpdateProfileWithNotifications() {
    const dispatch = useAppDispatch();
    const notifications: TNotification[] = useAppSelector(select.wsNotification._data);
    const debounceNotificationsLength: string = useDebounce(String(notifications.length), 500);

    useEffect(() => {
        const hasMatchResult: boolean = notifications.some((el: TNotification) => el.matchState === 'finished');
        if (hasMatchResult) {
            dispatch(thunkGetProfile());
        }
    }, [debounceNotificationsLength]);
}
