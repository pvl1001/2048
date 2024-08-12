import {TNotification, TNotificationPersistent} from "../../entities/notification/types";
import {StorageItem} from "../common/StorageItem";
import {DateUtils} from "./DateUtils";


/**
 * Берем данные из localStorage, как initialState;
 * Проверяем уведомления на срок годности (1 день);
 * Новые сообщения проверяем на дубль. Если не дубль, то записываем в redux;
 * Сообщения (без награды - Persistent) при прочтении записываем в localStorage ;
 * Сообщения (с наградой - Transient) не записываем;
 * После onLogout чистим localStorage;
 * */

export class NotificationsUtils {

    private static setNotifications(notifications: TNotificationPersistent[]) {
        localStorage[StorageItem.NOTIFICATIONS] = JSON.stringify(notifications);
    }

    /** Удалить уведомление, если срок создания больше 1 дня */
    private static checkDiffDate(notifications: TNotificationPersistent[]): TNotificationPersistent[] {
        let filteredNotifications: TNotificationPersistent[] = notifications.filter((n) => {
            let diff: number = +DateUtils.getDiff({endDate: DateUtils.getDateFromUnix(n.readTime as number)}).format('D');
            return diff === 0;
        });
        this.setNotifications(filteredNotifications);
        return filteredNotifications;
    }

    static getNotifications(): TNotificationPersistent[] {
        let notifications = JSON.parse(localStorage[StorageItem.NOTIFICATIONS] || null) || [];
        return this.checkDiffDate(notifications);
    }

    static setItem(item: TNotification) {
        if ('id' in item && !this.isDouble(item)) {
            let notifications: TNotificationPersistent[] = this.getNotifications();
            item.readTime = DateUtils.now().unix();
            localStorage[StorageItem.NOTIFICATIONS] = JSON.stringify([item, ...notifications]);
        }
    }

    static isDouble(notification: TNotification): boolean {
        let notifications: TNotificationPersistent[] = this.getNotifications();
        return notifications.some(el => el.id === (notification as TNotificationPersistent).id);
    }

    static clearStorage() {
        delete localStorage[StorageItem.NOTIFICATIONS];
    }
}