import {ActionReducerMapBuilder, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {TSelectOption} from "shared/ui/select";
import {WithdrawState} from "./withdrawSlice";
import {Adapter} from "../api/Adapter";
import {Api} from "../api/Api";
import {BankCodesResponse} from "../api/types";


export const thunkGetBanks = createAsyncThunk<TSelectOption[], void>(
    'withdraw/thunkGetBanks',
    async (_, {rejectWithValue}) => {
        try {
            const res: BankCodesResponse = await Api.getBankCodes();
            return Adapter.bankCodes(res);
        } catch (err: unknown) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export function extraReducers(builder: ActionReducerMapBuilder<WithdrawState>) {
    builder
        .addCase(thunkGetBanks.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunkGetBanks.rejected, (state, action: PayloadAction<any>) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunkGetBanks.fulfilled, (state, action: PayloadAction<TSelectOption[]>) => {
            state.banks = action.payload;
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
}