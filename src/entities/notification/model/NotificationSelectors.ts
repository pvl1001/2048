import {RootState} from "app/store";


export class NotificationSelectors {
    static _data = (state: RootState) => state.wsNotification.data;
    static _socketStatus = (state: RootState) => state.wsNotification.status;
}
