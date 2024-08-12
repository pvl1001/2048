import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {TSelectOption} from "shared/ui/select";
import {RegisterFields} from "../lib/consts";
import {RegistrationPhonePayload} from "../types";
import {extraReducers} from "./RegistrationThunks";


export type RegistrationSlice = typeof initialState
export type RegistrationDataStep1 = typeof initialState.data.step1
export type RegistrationDataStep3 = typeof initialState.data.step3
export type RegistrationDataSlice = typeof initialState.data

let initialState = {
    step: 1,
    data: {
        step1: {
            country: {code: '+7'} as TSelectOption,
            phone: '',
            step1IsCheck: false,
        },
        step3: {
            [RegisterFields.FIRST_NAME]: 'test',
            [RegisterFields.LAST_NAME]: 'test',
            [RegisterFields.DAY]: {title: '', value: '1'} as TSelectOption,
            [RegisterFields.MONTH]: {title: '', value: '1'} as TSelectOption,
            [RegisterFields.YEAR]: {title: '', value: '1999'} as TSelectOption,
            [RegisterFields.EMAIL]: 'test@test.com',
            [RegisterFields.ZIP_CODE]: '123',
            [RegisterFields.INVITE_CODE]: '',
        }
    },
    status: '' as TStatusRequest,
    error: '',
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setPhone(state, action: PayloadAction<RegistrationPhonePayload>) {
            state.data.step1.country = action.payload.country;
            state.data.step1.phone = action.payload.phone;
        },
        setIsCheck(state) {
            state.data.step1.step1IsCheck = true;
        },
        setRegistrationForm(state, action: PayloadAction<RegistrationDataStep3>) {
            state.data.step3 = action.payload;
        },
        setStep(state, action: PayloadAction<number>) {
            state.step = action.payload;
        },
        resetRegistration() {
            return initialState;
        }
    },
    extraReducers
});

export let registrationActions = registrationSlice.actions;
export let registrationReducer = registrationSlice.reducer;