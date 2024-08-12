import {createSlice, Slice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {Tournament} from "../types";
import {extraReducers} from "./TournamentsThunks";


export type TournamentsSlice = typeof initialState

let initialState = {
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
export let tournamentsReducer = tournamentsSlice.reducer;