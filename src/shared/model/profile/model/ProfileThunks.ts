import {ActionReducerMapBuilder, AsyncThunk, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {Api, TWithdrawPayloadForm} from "features/withdraw_forms";
import {ClaimPayload, ClaimResponse, ServerService} from "shared/api/server_service";
import {BuyStore} from "shared/common/BuyStore";
import {Errors} from "shared/common/Errors";
import {StatusRequest} from "shared/common/StatusRequest";
import getErrorMessage, {isAxiosError} from "shared/lib/GetErrorMessage";
import {ProfileAdapter} from "../api/adapter";
import {ApiProfile} from "../api/ApiProfile";
import {ChangeNameResponse, Profile, ProfileServerResponse, TAvatarName} from "../types";
import {ProfileSlice} from "./ProfileSlice";


export let thunkSetProfile = createAsyncThunk<Profile, {avatarId?: TAvatarName, name?: string}>(
    'profile/thunkSetProfile',
    async (form, {rejectWithValue}) => {
        try {
            let profile = {} as Profile;
            if (form.name) {
                let changeNameResponse: ChangeNameResponse = await ApiProfile.changeName(form.name);
                profile = ProfileAdapter.getProfile(changeNameResponse.profile);
            }
            if (form.avatarId) {
                profile = await ApiProfile.setAttrProfile({'avatar-id': form.avatarId});
            }
            return profile;
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export let thunkSetProfileAttrs = createAsyncThunk<Profile, Record<string, any>>(
    'profile/thunkSetProfileAttrs',
    async (attrs, {rejectWithValue}) => {
        try {
            return await ApiProfile.setAttrProfile(attrs);
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export let thunkGetProfile = createAsyncThunk<Profile>(
    'profile/thunkGetProfile',
    async (_, {rejectWithValue}) => {
        try {
            let profile: Profile = await ApiProfile.getProfile();
            return profile;
        } catch (err) {
            if (isAxiosError(err) && err.response?.data.exception === Errors.BANNED) {
                return rejectWithValue(err.response.data.exception);
            }
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export let thunkBuyItem = createAsyncThunk<ProfileServerResponse, BuyStore | string>(
    'profile/thunkBuyItem',
    async (buyStoreItem, {rejectWithValue}) => {
        try {
            return await ApiProfile.buyItem(buyStoreItem);
        } catch (err) {
            console.error(err);
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export let thunkCreatePayout = createAsyncThunk<Profile, TWithdrawPayloadForm>(
    'profile/thunkCreatePayout',
    async (data, {rejectWithValue}) => {
        try {
            let {profile} = await Api.createPayout(data);
            return ProfileAdapter.getProfile(profile);
        } catch (err) {
            console.error(err);
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export let thunkGetClaim = createAsyncThunk<ClaimResponse, ClaimPayload | undefined>(
    'profile/thunkGetClaim',
    async (payload = {} as ClaimPayload, {rejectWithValue}) => {
        try {
            return await ServerService.getClaim(payload);
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export let thunkGetLevelClaim = createAsyncThunk<ProfileServerResponse>(
    'profile/thunkGetLevelClaim',
    async (_, {rejectWithValue}) => {
        try {
            return await ApiProfile.getLevelClaim();
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

let builderProfile = <T>(builder: ActionReducerMapBuilder<ProfileSlice>, thunk: AsyncThunk<Profile, T, any>) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunk.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunk.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isAuth = true;
            state.data = action.payload;
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
};

let builderWithCurrency = <T>(builder: ActionReducerMapBuilder<ProfileSlice>, thunk: AsyncThunk<ProfileServerResponse, T, any>) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunk.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunk.fulfilled, (state, action: PayloadAction<ProfileServerResponse>) => {
            let {profile} = action.payload;
            state.data = ProfileAdapter.getProfile(profile);
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
};

export function extraReducers(builder: ActionReducerMapBuilder<ProfileSlice>) {
    builderProfile(builder, thunkGetProfile);
    builderProfile(builder, thunkSetProfileAttrs);
    builderProfile(builder, thunkSetProfile);
    builderProfile(builder, thunkCreatePayout);

    builderWithCurrency(builder, thunkBuyItem);
    builderWithCurrency(builder, thunkGetLevelClaim);

    builder
        .addCase(thunkGetClaim.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunkGetClaim.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunkGetClaim.fulfilled, (state, action: PayloadAction<ClaimResponse>) => {
            let {profileMutation} = action.payload;
            state.data = ProfileAdapter.getProfile(profileMutation.profile);
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });

}