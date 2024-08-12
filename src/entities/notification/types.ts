import {Money} from "shared/api/server_service";
import {MatchState} from "shared/common/MatchState";
import {WSTopics} from "./lib/consts";


export type NotificationVariants = 'finished' | 'cancelled' | 'invite_friend_reward' | 'tournament_reward' | 'tournament_refund' | 'inapp_deposit' | string

export type TNotificationPersistent = {
    id: number
    readTime?: number
    topic: WSTopics
    matchState: NotificationVariants
    isRead: boolean
    rewardId: number | null
    status?: string
    data: any
};

export type TNotificationTransient = Omit<TNotificationPersistent, 'id'> & {
    cause: string
}

export type TVariantItem = Record<NotificationVariants | 'completed', {
    text: string
    className: string
}>

export type TVariant = Record<WSTopics, Partial<TVariantItem>>

export type TNotification = TNotificationPersistent | TNotificationTransient

export type NotificationResponse = Persistent | Transient

export type Persistent = {
    persistent: {
        "id": string
        "message": WsMessage
    }
}

type WsMessage = {
    "created": string
    "topic": WSTopics
    "payload": {
        "type": string
        "object": {
            "@type": string
            "playerId": string
            "payout": {
                "CurrencyId": string
                "Count": number
            },
            "store": string
            "status": string
            "rewardId": number | null
            "rewards": {
                "CurrencyId": string
                "Count": string
            }[],
            matchState: MatchState
        }
    }
}

export type Transient = {
    transient: {
        "created": string
        "topic": WSTopics
        "payload": {
            "type": string
            "object": {
                "@type": string
                "reward": {
                    "rewardId": number,
                    "cause": 'INVITE_FRIEND_REWARD' | 'TOURNAMENT_REFUND' | 'TOURNAMENT_REWARD' | 'INAPP_DEPOSIT',
                    "currency": {
                        "CurrencyId": Money,
                        "Count": string
                    }[],
                    "items": any[],
                    "attributes": any[]
                }
            }
        }
    }
}
