import {createSlice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {extraReducers} from "./ProfileThunks";
import {Profile} from "../types";


export type ProfileSlice = typeof initialState

const initialState = {
    isAuth: false,
    data: null as Profile | null,
    status: '' as TStatusRequest,
    error: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;