import {ActionReducerMapBuilder, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {PromotionsApi} from "../api/PromotionsApi";
import {Promotion} from "../types";
import {PromotionsSlice} from "./PromotionsSlice";


export let thunkGetPromotions = createAsyncThunk<Promotion[]>(
    'promotions/thunkGetPromotions',
    async (_, {rejectWithValue}) => {
        try {
            let res: Promotion[] = await PromotionsApi.getPromotions();
            return res.sort((a, b) => a.centum - b.centum);
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export function extraReducers(builder: ActionReducerMapBuilder<PromotionsSlice>) {
    builder
        .addCase(thunkGetPromotions.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunkGetPromotions.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunkGetPromotions.fulfilled, (state, action: PayloadAction<Promotion[]>) => {
            state.data = action.payload;
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
}