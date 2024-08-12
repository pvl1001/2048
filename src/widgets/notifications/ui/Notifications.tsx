import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {Notification, TNotification} from "entities/notification";
import {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import NotificationsIcon from "shared/assets/icons/button_notifications.svg";
import {ReactComponent as TippyArrow} from 'shared/assets/icons/tooltip-arrow.svg';
import NavButton from "shared/ui/nav_button";
// import useWsNotifications from "../lib/useWsNotifications";
import s from "./Notifications.scss";


export function Notifications() {
    // useWsNotifications();
    let [isVisible, setIsVisible] = useState(false);
    let notifications: TNotification[] = useAppSelector(select.wsNotification._data);
    let hasActive: boolean = notifications.some((n: TNotification) => !n.isRead);

    useEffect(() => {
        window.addEventListener('scroll', () => setIsVisible(false), {once: true});
    }, [isVisible]);

    return (
        <div className={s.wrapper}>
            <CSSTransition
                in={isVisible && !!notifications.length}
                timeout={250}
                classNames={'transition-tippy'}
                unmountOnExit
            >
                <div>
                    <div className={s.overlay} onClick={() => setIsVisible(false)}/>
                    <div className={cn(s.tippy, 'tooltip')}>
                        <TippyArrow className={s.arrow}/>
                        <ul className={s.list}>
                            {notifications.map((n: TNotification, i: number) =>
                                <Notification key={i} index={i} data={n}/>
                            )}
                        </ul>
                    </div>
                </div>
            </CSSTransition>
            <NavButton
                className={s.button}
                svgPath={NotificationsIcon}
                isActive={hasActive}
                onClick={() => setIsVisible(prev => !prev)}
            />
        </div>
    );
}
