import {TVariant} from "../types";
import s from "../ui/Notification.scss";


export enum WSTopics {
    /** Результат матча */
    chMatchResult = "CH_MATCH_RESULT",
    /** Награда для клейма */
    unclaimedReward = "UNCLAIMED_REWARD",
    /** Подтверждение пейина DtoFinishD24PayinInbox в D24 */
    finishD24PayinInbox = "FINISH_D24_PAYIN_INBOX",
    /** Информация о платеже в Xsoll'е */
    // analyticsOrder = "ANALYTICS_ORDER",
    /** Аналитика окончания вывода средств (Не использовать для подтверждения окончания пейаута) */
    analyticsPayoutCustomer = "ANALYTICS_PAYOUT_CUSTOMER",
    /** Внешнее денежное финансирование */
    // currencyFund = "CURRENCY_FUND",
    /** Награда за приглашение друга */
    // chInviteReward = "CH_INVITE_REWARD",
    /** Результат покупки Xsoll'ы */
    // xsollaFinishOrder = "XSOLLA_FINISH_ORDER",
    /** Результат покупки Paypal */
    // paypalFinishCheckout = "PAYPAL_FINISH_CHECKOUT",
    /** Подтверждение пейина DtoFinishPaykassmaPayinInbox в Paykassma */
    // finishPaykassmaPayinInbox = "FINISH_PAYKASSMA_PAYIN_INBOX",
    /** Массовые уведомления */
    // globalInbox = "GLOBAL_INBOX",
    /** Подтверждение пейина DtoFinishLinqPayinInbox в Linq */
    // finishLinqPayinInbox = "FINISH_LINQ_PAYIN_INBOX",
    /** Для дебага, например в вебе, DtoTestInbox */
    // testInbox = "TEST_INBOX",
    // squadInvite = "SQUAD_INVITE",
    // squadInviteObsolete = "SQUAD_INVITE_OBSOLETE",
    // onlineStatus = "ONLINE_STATUS",
    // clan = "CLAN",
    // clientPush = "CLIENT_PUSH",
    // friendship = "FRIENDSHIP",
    // ratingReward = "RATING_REWARD",
    // levelUp = "LEVEL_UP",
}

export let variant: Partial<TVariant> = {
    [WSTopics.chMatchResult]: {
        finished: {
            text: 'Турнир завершился!',
            className: s.finished,
        },
        cancelled: {
            text: 'Ваш турнир был распущен:(',
            className: s.cancelled
        },
    },
    [WSTopics.unclaimedReward]: {
        tournament_refund: {
            text: 'Вам начислен возврат средств за матч!',
            className: s.reward
        },
        tournament_reward: {
            text: 'Вам начислена награда за матч!',
            className: s.reward,
        },
        invite_friend_reward: {
            text: 'Ваш друг зарегистрировался по вашему коду! Вам начислена награда!',
            className: s.reward,
        },
        inapp_deposit: {
            text: 'Вам начислена награда за депозит!',
            className: s.reward,
        },
        inapp_withdraw_cancel: {
            text: 'Вам начислен возврат средств за отмену вывода валюты',
            className: s.reward,
        },
    },
    [WSTopics.finishD24PayinInbox]: {
        cancelled: {
            text: 'Платеж отменен',
            className: s.cancelled
        },
        completed: {
            text: 'Платеж прошел успешно!',
            className: s.finished
        }
    },
    [WSTopics.analyticsPayoutCustomer]: {
        rejected: {
            text: 'Вывод валюты отменен',
            className: s.cancelled
        },
        success: {
            text: 'Вывод валюты успешно завершен!',
            className: s.finished
        },
    }
};
