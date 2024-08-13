import {createSlice, Slice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {extraReducers} from "./TournamentsThunks";
import {Tournament} from "../types";


export type TournamentsSlice = typeof initialState

const initialState = {
    data: [] as Tournament[],
    status: '' as TStatusRequest,
    error: '',
};

const tournamentsSlice: Slice<TournamentsSlice> = createSlice({
    name: 'tournaments',
    initialState,
    reducers: {},
    extraReducers
});

export let {} = tournamentsSlice.actions;
export const tournamentsReducer = tournamentsSlice.reducer;