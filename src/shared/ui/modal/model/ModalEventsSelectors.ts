import {RootState} from "app/store";


export class ModalEventsSelectors {
    static _events = (state: RootState) => state.modalEvents;
    static _getCurrentEvent = (key: keyof RootState['modalEvents']) => (state: RootState) => state.modalEvents[key];
}