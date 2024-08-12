import {createSlice} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import {TSelectOption} from "shared/ui/select";
import {extraReducers} from "./extraReducer";


export type WithdrawState = typeof initialState

let initialState = {
    banks: [] as TSelectOption[],
    status: '' as StatusRequest,
    error: '',
};

let withdrawSlice = createSlice({
    name: 'withdraw',
    initialState,
    reducers: {},
    extraReducers,
});

export let withdrawReducer = withdrawSlice.reducer;