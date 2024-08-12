import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RoutePaths} from "shared/common/RoutePaths";


export type ModalEvent = Partial<Record<RoutePaths, Record<string, any> & {
    order: number
}>>

let initialState = {} as ModalEvent;

// Порядок вызовов окон. Чем ниже по списку, тем приоритетнее окно
let orders = [
    RoutePaths.DAILY_REWARDS,
    RoutePaths.LEVEL_PROGRESS,
    RoutePaths.LEVEL_UP,
    RoutePaths.REFUND,
    RoutePaths.TUTORIAL,
    RoutePaths.SUCCESS,
    RoutePaths.REGISTRATION_SUCCESS,
    RoutePaths.ERROR,
];

let modalEventsSlice = createSlice({
    name: 'modalEvents',
    initialState,
    reducers: {
        addEvent(state, action: PayloadAction<{event: ModalEvent, isForward?: boolean}>) {
            let {isForward, event} = action.payload;

            if (isForward) { // вызвать окно вне очереди
                return {...event, ...state};
            }

            let eventKey = Object.keys(event)[0] as keyof ModalEvent;
            let eventValue = event[eventKey];
            let order: number = orders.findIndex(el => el === eventKey);

            if (eventValue === null) {
                eventValue = {order};
            }
            if (eventValue && eventValue?.order === undefined) {
                eventValue = {...eventValue, order};
            }

            return Object.fromEntries(
                Object
                    .entries({...state, ...{[eventKey]: eventValue}})
                    .sort(([, a], [, b]) => b.order - a.order)
            );
        },
        removeEvent(state, action: PayloadAction<RoutePaths>) {
            delete state[action.payload];
        }
    },
});

export let modalEventsActions = modalEventsSlice.actions;
export let modalEventsReducer = modalEventsSlice.reducer;