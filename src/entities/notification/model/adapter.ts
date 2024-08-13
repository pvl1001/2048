import {NotificationResponse, TNotification} from "../types";


export class NotificationsAdapter {
    static get(payload: NotificationResponse): TNotification {
        if ('persistent' in payload) {
            const {persistent} = payload;
            return {
                id: +persistent.id,
                topic: persistent.message.topic,
                matchState: persistent.message.payload.object.matchState?.toLowerCase(),
                status: persistent.message.payload.object.status?.toLowerCase(),
                rewardId: persistent.message.payload.object.rewardId || null,
                data: persistent.message.payload,
                isRead: false
            };
        }
        const {transient} = payload;

        return {
            topic: transient.topic,
            matchState: transient.payload.object.reward.cause.toLowerCase(),
            cause: transient.payload.object.reward.cause,
            rewardId: transient.payload.object.reward.rewardId || null,
            data: transient.payload,
            isRead: false,
        };
    }
}