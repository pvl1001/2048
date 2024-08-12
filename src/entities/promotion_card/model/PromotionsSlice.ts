import {createSlice, Slice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {Promotion} from "../types";
import {extraReducers} from "./PromotionsThunks";


export type PromotionsSlice = typeof initialState

let initialState = {
    data: [] as Promotion[],
    status: '' as TStatusRequest,
    error: '',
};

const promotionsSlice: Slice<PromotionsSlice> = createSlice({
    name: 'promotions',
    initialState,
    reducers: {},
    extraReducers
});

export let {} = promotionsSlice.actions;
export let promotionsReducer = promotionsSlice.reducer;