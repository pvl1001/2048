import {createSlice, Slice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {extraReducers} from "./PromotionsThunks";
import {Promotion} from "../types";


export type PromotionsSlice = typeof initialState

const initialState = {
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
export const promotionsReducer = promotionsSlice.reducer;