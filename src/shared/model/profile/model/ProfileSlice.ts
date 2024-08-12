import {createSlice} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {Profile} from "../types";
import {extraReducers} from "./ProfileThunks";


export type ProfileSlice = typeof initialState

let initialState = {
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

export let profileActions = profileSlice.actions;
export let profileReducer = profileSlice.reducer;