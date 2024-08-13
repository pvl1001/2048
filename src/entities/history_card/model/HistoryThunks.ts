import {ActionReducerMapBuilder, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {HistorySlice} from "./HistorySlice";
import {ApiHistory} from "../api/ApiHistory";
import {Cause} from "../lib/const";
import {Transaction} from "../types";


function getInapps(arr: Transaction[]): Transaction[] {
    return arr.filter(el => [Cause.INAPP_DEPOSIT, Cause.INAPP_WITHDRAW].includes(el.cause));
}

export const thunkGetTransactions = createAsyncThunk<Transaction[], void>(
    'history/thunkGetHistory',
    async (_, {rejectWithValue}) => {
        try {
            const transaction: Transaction[] = await ApiHistory.getTransactions();
            return getInapps(transaction);
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export function extraReducers(builder: ActionReducerMapBuilder<HistorySlice>) {
    builder
        .addCase(thunkGetTransactions.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunkGetTransactions.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunkGetTransactions.fulfilled, (state, action: PayloadAction<Transaction[]>) => {
            state.data = action.payload;
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
}