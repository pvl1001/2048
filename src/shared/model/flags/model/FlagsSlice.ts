import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type Flags = typeof initialState
export type FlagsKeys = keyof typeof initialState

let initialState = {
    isUnclaimedDone: false,
    isCheckLevel: false,
    isPlay: false,
};

let flagsSlice = createSlice({
    name: 'flags',
    initialState,
    reducers: {
        toggleFlag(state, action: PayloadAction<{key: FlagsKeys, status?: boolean}>) {
            let {key, status} = action.payload;
            if (typeof status === 'boolean') {
                state[key] = status;
            } else {
                state[key] = !state[key];
            }
        },
    }
});

export let flagsActions = flagsSlice.actions;
export let flagsReducer = flagsSlice.reducer;