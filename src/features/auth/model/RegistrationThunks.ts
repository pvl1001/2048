import {ActionReducerMapBuilder, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {StatusRequest} from "shared/common/StatusRequest";
import {DateUtils} from "shared/lib/DateUtils";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {TValidationSchema} from "shared/lib/hooks";
import {registrationActions, RegistrationDataStep3, RegistrationSlice} from "./RegistrationSlice";
import {Api} from "../api/Api";
import {RegistrationDataResponse} from "../api/types";


export const thunkRegistrationContinue = createAsyncThunk<RegistrationDataStep3 | undefined, TValidationSchema>(
    'registration/thunkRegistrationContinue',
    async (ValidationSchema: TValidationSchema, {dispatch, rejectWithValue}) => {
        try {
            const res: RegistrationDataResponse = await Api.getRegistrationData();

            if (!res.isRegistered) {
                const birthDay: number = +DateUtils.getDay(res.regData.birthday);
                const birthMonth: number = +DateUtils.getMonth(res.regData.birthday);
                const birthYear: number = +DateUtils.getYear(res.regData.birthday);
                const {birthday, ...rest} = res.regData;
                const payload = {...rest, birthDay, birthMonth, birthYear};

                const formData: RegistrationDataStep3 = {
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