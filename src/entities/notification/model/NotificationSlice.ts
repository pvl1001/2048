import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NotificationsUtils} from "shared/lib/NotificationsUtils";
import {NotificationsAdapter} from "./adapter";
import {NotificationResponse, TNotification} from "../types";


const initialState = {
    url: '',
    data: NotificationsUtils.getNotifications() as TNotification[],
    sendMessage: null as any,
    status: 'close',
};

const wsNotificationSlice = createSlice({
    name: 'ws',
    initialState,
    reducers: {
        connect(state, action) {
            state.url = action.payload;
        },
        open(state, action) {
            state.status = action.payload;
        },
        close() {
            return initialState;
        },
        error(state) {
            state.status = 'error';
        },
        get(state, action: PayloadAction<NotificationResponse>) {
            const notification: TNotification = NotificationsAdapter.get(action.payload);
            if (!NotificationsUtils.isDouble(notification)) {
                state.data.unshift(notification);
            }
        },
        read(state, action: PayloadAction<Record<'id' | 'index', number>>) {
            state.data = state.data.map((n, i) => {
                if (i === action.payload.index) {
                    n.isRead = true;
                    NotificationsUtils.setItem(n);
                }
                return n;
            });
        },
    },
});

export const wsNotificationActions = wsNotificationSlice.actions;
export const wsNotificationReducer = wsNotificationSlice.reducer;