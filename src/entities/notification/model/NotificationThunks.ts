// import {createAsyncThunk} from "@reduxjs/toolkit";
// import {MatchInfo, ServerService} from "shared/api/server_service";
// import {MatchState} from "shared/common/MatchState";
// import {StorageItem} from "shared/common/StorageItem";
// import getErrorMessage from "shared/lib/GetErrorMessage";
// import {LocalStorage} from "shared/lib/LocalStorage";

// export let thunkCheckMatchResults = createAsyncThunk<MatchInfo | null>(
//     'notification/thunkCheckMatchResults',
//     async (_, {rejectWithValue}) => {
//         try {
//             let battles_id: string[] = LocalStorage.getValue(StorageItem.BATTLES_ID);
//             let matchResults: MatchInfo[] = await Promise.all(
//                 battles_id.map(async (id: string): Promise<MatchInfo> =>
//                     await ServerService.getMatchResults(id))
//             );
//             let finished: MatchInfo | undefined = matchResults.find((r: MatchInfo) => r.state === MatchState.FINISHED);
//             // let finished: MatchInfo = mock_battleResults;
//             if (finished) {
//                 let battles_id: string[] = LocalStorage.getValue(StorageItem.BATTLES_ID);
//                 let filteredBattlesId: string[] = battles_id.filter(b => b !== finished?.id);
//                 LocalStorage.setKeyValue(StorageItem.BATTLES_ID, filteredBattlesId);
//                 return finished;
//             }
//             return null;
//         } catch (err) {
//             return rejectWithValue(getErrorMessage(err));
//         }
//     }
// );

// export function extraReducers(builder: ActionReducerMapBuilder<NotificationSlice>) {
//     builder
//         .addCase(thunkCheckMatchResults.pending, (state) => {
//             state.status = StatusRequest.PENDING;
//         })
//         .addCase(thunkCheckMatchResults.rejected, (state, action) => {
//             state.status = StatusRequest.REJECT;
//             state.error = action.payload as string;
//         })
//         .addCase(thunkCheckMatchResults.fulfilled, (state, action: PayloadAction<MatchInfo | null>) => {
//             if (action.payload) {
//                 state.data.matchResults.push(action.payload);
//             }
//             state.status = StatusRequest.SUCCESS;
//             state.error = '';
//         });
// }