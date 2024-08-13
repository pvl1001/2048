import {createSlice} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import {TSelectOption} from "shared/ui/select";
import {extraReducers} from "./extraReducer";


export type WithdrawState = typeof initialState

const initialState = {
    banks: [] as TSelectOption[],
    status: '' as StatusRequest,
    error: '',
};

const withdrawSlice = createSlice({
    name: 'withdraw',
    initialState,
    reducers: {},
    extraReducers,
});

export const withdrawReducer = withdrawSlice.reducer;