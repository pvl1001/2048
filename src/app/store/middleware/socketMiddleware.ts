import {NotificationResponse, WSTopics} from "entities/notification";
import {Cookie} from "shared/lib/Cookie";
import {WsActions, wsActions} from "../lib/wsActions";
import {AppDispatch, RootState} from "../types";
import type {Middleware, MiddlewareAPI} from 'redux';


function offPersistentReward(message: NotificationResponse) { // Отключить дублирующую награду
    if ('persistent' in message) {
        const {topic, payload} = message.persistent.message;
        if (topic !== WSTopics.unclaimedReward && payload.object.rewardId) {
            payload.object.rewardId = null;
        }
    }
}

export const socketMiddleware = (): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let ws: WebSocket | null = null;

        return next => (action: WsActions) => {
            const {dispatch} = store;
            const {type} = action;
            const {wsConnection, wsRead, wsOpen, wsError, wsMessage, wsClose} = wsActions;

            if (type === wsConnection.type && wsConnection.match(action)) {
                ws = new WebSocket(action.payload);
            }

            if (ws && type === wsClose.type && wsClose.match(action)) {
                ws.close(1000, `WebSocket success closed`);
                ws = null;
                console.log(`WebSocket success closed`);
            }

            if (ws && type === wsRead.type && wsRead.match(action) && action.payload.id) {
                ws.send(JSON.stringify({"ackPersistent": {"messageId": [action.payload.id]}}));
            }

            if (ws) {
                ws.onopen = (event) => {
                    console.log('ws: onopen');
                    const token = Cookie.get('token');
                    token && ws?.send(token);
                    ws?.send(JSON.stringify({
                        "subscribe": {
                            "topics": [
                                WSTopics.chMatchResult,
                                WSTopics.unclaimedReward,
                                WSTopics.finishD24PayinInbox,
                                WSTopics.analyticsPayoutCustomer,
                            ],
                            // topics: Object.values(WSTopics)
                        }
                    }));
                    dispatch(wsOpen(event.type));
                };
                ws.onerror = (event) => {
                    console.error({wsErrorEvent: event});
                    dispatch(wsError());
                };
                ws.onmessage = (event) => {
                    const message: NotificationResponse = JSON.parse(event.data);
                    offPersistentReward(message);
                    dispatch(wsMessage(message));
                };
                ws.onclose = ({reason, code, type}) => {
                    console.log(`ws onclose: code: ${code}, reason: ${reason}`);
                    dispatch(wsClose(type));
                    if (code !== 1000) {
                        setTimeout(() => {
                            dispatch(wsConnection(import.meta.env.WS_URL as string));
                        }, 300);
                    }
                };
            }

            next(action);
        };
    }) as Middleware;
};