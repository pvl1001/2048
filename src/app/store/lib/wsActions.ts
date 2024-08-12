import {createAction} from "@reduxjs/toolkit";
import {NotificationResponse} from "entities/notification";


export const wsActions = {
    wsOpen: createAction<string>('ws/open'),
    wsClose: createAction<string>('ws/close'),
    wsConnection: createAction<string>('ws/connect'),
    wsOffline: createAction('ws/wsOffline'),
    wsError: createAction('ws/error'),
    wsMessage: createAction<NotificationResponse>('ws/get'),
    wsRead: createAction<{id: string}>('ws/read'),
} as const;

export type WsActions = typeof wsActions[keyof typeof wsActions]
