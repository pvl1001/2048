import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type Flags = typeof initialState
export type FlagsKeys = keyof typeof initialState

const initialState = {
    isUnclaimedDone: false,
    isCheckLevel: false,
    isPlay: false,
};

const flagsSlice = createSlice({
    name: 'flags',
    initialState,
    reducers: {
        toggleFlag(state, action: PayloadAction<{key: FlagsKeys, status?: boolean}>) {
            const {key, status} = action.payload;
            if (typeof status === 'boolean') {
                state[key] = status;
            } else {
                state[key] = !state[key];
            }
        },
    }
});

export const flagsActions = flagsSlice.actions;
export const flagsReducer = flagsSlice.reducer;