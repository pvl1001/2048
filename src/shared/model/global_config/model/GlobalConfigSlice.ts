import {createSlice, Slice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {extraReducers} from "./GlobalConfigThunks";
import {GlobalConfig} from "../types";


export type GlobalConfigSlice = typeof initialState
export type GlobalConfigDataSlice = typeof initialState.data

const initialState = {
    data: {} as GlobalConfig,
    status: '' as TStatusRequest,
    error: '',
};

const globalConfigSlice: Slice<GlobalConfigSlice> = createSlice({
    name: 'globalConfig',
    initialState,
    reducers: {},
    extraReducers
});

export let {} = globalConfigSlice.actions;
export const globalConfigReducer = globalConfigSlice.reducer;