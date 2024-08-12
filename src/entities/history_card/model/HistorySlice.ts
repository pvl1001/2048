import {createSlice, Slice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {Transaction} from "../types";
import {extraReducers} from "./HistoryThunks";


export type HistorySlice = typeof initialState

let initialState = {
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

export let historyReducer = historySlice.reducer;