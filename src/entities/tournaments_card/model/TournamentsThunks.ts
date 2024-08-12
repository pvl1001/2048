import {ActionReducerMapBuilder, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {TournamentsApi} from "../api/TournamentsApi";
import {Tournament} from "../types";
import {TournamentsSlice} from "./TournamentsSlice";


export let thunkGetTournaments = createAsyncThunk<Tournament[]>(
    'tournaments/thunkGetTournaments',
    async (_, {rejectWithValue}) => {
        try {
            return await TournamentsApi.getTournaments();
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export function extraReducers(builder: ActionReducerMapBuilder<TournamentsSlice>) {
    builder
        .addCase(thunkGetTournaments.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunkGetTournaments.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunkGetTournaments.fulfilled, (state, action: PayloadAction<Tournament[]>) => {
            state.data = action.payload;
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
}