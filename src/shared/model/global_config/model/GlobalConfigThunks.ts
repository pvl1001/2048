import {ActionReducerMapBuilder, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {GlobalConfigSlice} from "./GlobalConfigSlice";
import {ApiConfig} from "../api/ApiConfig";
import {GlobalConfig} from "../types";


export const thunkGetGlobalConfig = createAsyncThunk<GlobalConfig>(
    'globalConfig/thunkGetGlobalConfig',
    async (_, {rejectWithValue}) => {
        try {
            return await ApiConfig.getMetaConfig();
        } catch (err) {
            console.error(err);
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export function extraReducers(builder: ActionReducerMapBuilder<GlobalConfigSlice>) {
    builder
        .addCase(thunkGetGlobalConfig.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunkGetGlobalConfig.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunkGetGlobalConfig.fulfilled, (state, action: PayloadAction<GlobalConfig>) => {
            state.data = action.payload;
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
}