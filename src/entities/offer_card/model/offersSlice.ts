import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {Api} from "../api/Api";
import {OffersDataKeys, TOffers} from "../types";


export let thunkGetOffers = createAsyncThunk<TOffers>(
    'thunkGetOffers',
    async (_, {rejectWithValue}) => {
        try {
            return await Api.getOffers();
        } catch (err: unknown) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

let initialState = {
    data: {} as TOffers,
    status: '' as StatusRequest,
    error: '' as string,
};

let offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        removeOffer(state, action: PayloadAction<OffersDataKeys>) {
            delete state.data[action.payload];
        }
    },
    extraReducers: builder =>
        builder
            .addCase(thunkGetOffers.pending, (state) => {
                state.status = StatusRequest.PENDING;
            })
            .addCase(thunkGetOffers.rejected, (state, action) => {
                state.status = StatusRequest.REJECT;
                state.error = action.payload as string;
            })
            .addCase(thunkGetOffers.fulfilled, (state, action: PayloadAction<TOffers>) => {
                state.data = action.payload;
                state.status = StatusRequest.SUCCESS;
                state.error = '';
            })
});

export let offersActions = offersSlice.actions;
export let offersReducer = offersSlice.reducer;