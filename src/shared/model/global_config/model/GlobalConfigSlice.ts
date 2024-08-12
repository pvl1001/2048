import {createSlice, Slice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {GlobalConfig} from "../types";
import {extraReducers} from "./GlobalConfigThunks";


export type GlobalConfigSlice = typeof initialState
export type GlobalConfigDataSlice = typeof initialState.data

let initialState = {
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
export let globalConfigReducer = globalConfigSlice.reducer;