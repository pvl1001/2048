import {ActionReducerMapBuilder, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import {DateUtils} from "shared/lib/DateUtils";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {TValidationSchema} from "shared/lib/hooks";
import {Api} from "../api/Api";
import {RegistrationDataResponse} from "../api/types";
import {registrationActions, RegistrationDataStep3, RegistrationSlice} from "./RegistrationSlice";


export let thunkRegistrationContinue = createAsyncThunk<RegistrationDataStep3 | undefined, TValidationSchema>(
    'registration/thunkRegistrationContinue',
    async (ValidationSchema: TValidationSchema, {dispatch, rejectWithValue}) => {
        try {
            let res: RegistrationDataResponse = await Api.getRegistrationData();

            if (!res.isRegistered) {
                let birthDay: number = +DateUtils.getDay(res.regData.birthday);
                let birthMonth: number = +DateUtils.getMonth(res.regData.birthday);
                let birthYear: number = +DateUtils.getYear(res.regData.birthday);
                let {birthday, ...rest} = res.regData;
                let payload = {...rest, birthDay, birthMonth, birthYear};

                let formData: RegistrationDataStep3 = {
                    inviteCode: '',
                    ...payload,
                    birthDay: {title: '', value: birthDay},
                    birthMonth: {title: '', value: birthMonth},
                    birthYear: {title: '', value: birthYear},
                };

                try {
                    await ValidationSchema.registrationStep3.validate(formData);
                    await Api.registerAccount(payload);
                    dispatch(registrationActions.setStep(4));
                } catch (err) {
                    console.error(getErrorMessage(err));
                    dispatch(registrationActions.setStep(3));
                }

                return formData;
            }
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export function extraReducers(builder: ActionReducerMapBuilder<RegistrationSlice>) {
    builder
        .addCase(thunkRegistrationContinue.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunkRegistrationContinue.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunkRegistrationContinue.fulfilled, (state, action: PayloadAction<RegistrationDataStep3 | undefined>) => {
            if (action.payload) {
                state.data.step3 = action.payload;
            }
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
}