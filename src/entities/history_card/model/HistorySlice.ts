import {createSlice, Slice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {extraReducers} from "./HistoryThunks";
import {Transaction} from "../types";


export type HistorySlice = typeof initialState

const initialState = {
    data: [] as Transaction[],
    status: '' as TStatusRequest,
    error: '',
};

const historySlice: Slice<HistorySlice> = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers
});

export const historyReducer = historySlice.reducer;