import {useAppDispatch} from "app/store";
import cn from "classnames";
import ArrowIcon from 'shared/assets/icons/arrow_back.svg?react';
import {useGetCurrency, UseGetCurrency} from "shared/lib/hooks";
import {variant} from "../lib/consts";
import {wsNotificationActions} from "../model/NotificationSlice";
import {TNotification, TNotificationPersistent} from "../types";
import s from "./Notification.module.scss";


type NotificationProps = {
    index: number
    data: TNotification
}

export function Notification({index, data}: NotificationProps) {
    const dispatch = useAppDispatch();
    const {isRead, matchState, rewardId, topic, status}: TNotification = data;
    const key: string = status || matchState;
    const variantData = variant[topic]?.[key] ?? {
        text: `${topic} / ${key}`,
        className: s.cancelled
    };
    const {getClaim}: UseGetCurrency = useGetCurrency();

    function readNotification() {
        console.log(data);
        if (!isRead) {
            dispatch(wsNotificationActions.read({id: (data as TNotificationPersistent).id, index}));
            rewardId && getClaim({rewardIds: [rewardId]}, matchState);
        }
    }

    return (
        <li onClick={readNotification}
            className={cn(variantData.className, {
                [s.done]: isRead
            })}>
            <div className={s.icon}/>
            <p className={s.text}>{variantData.text}</p>
            <ArrowIcon className={s.arrow_icon}/>
        </li>
    );
}
