import {ActionReducerMapBuilder, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {MatchState} from "shared/common/MatchState";
import {StatusRequest} from "shared/common/StatusRequest";
import getErrorMessage from "shared/lib/GetErrorMessage";
import mock_match_history from "../../../widgets/menu/user_menu/menu_results/lib/mock_match_history";
import {MatchInfo, TournamentGroup} from "../types";
import {PlayersResultsSlice} from "./PlayersResultsSlice";


export let thunkGetMatchResults = createAsyncThunk<TournamentGroup[]>(
    'playersResults/thunkGetMatchResults',
    async (_, {rejectWithValue}) => {
        try {
            let initialState: TournamentGroup[] = [
                {title: 'Current Tournaments', matchInfo: []},
                {title: 'Completed Tournaments', matchInfo: []},
                {title: 'Incomplete Tournaments', matchInfo: []},
            ];

            // let matchHistoryResponse: MatchInfo[] = await Api.getMatchHistory();
            let matchHistoryResponse: MatchInfo[] = mock_match_history;
            return matchHistoryResponse.length
                ? matchHistoryResponse.reduce((acc: TournamentGroup[], el: MatchInfo) => {
                    switch (el.state) {
                        case MatchState.ONGOING:
                            acc[0].matchInfo.push(el);
                            break;
                        case MatchState.FINISHED:
                            acc[1].matchInfo.push(el);
                            break;
                        case MatchState.CANCELLED:
                            acc[2].matchInfo.push(el);
                            break;
                    }
                    return acc;
                }, initialState)
                : [];
        } catch (err) {
            return rejectWithValue(getErrorMessage(err));
        }
    }
);

export function extraReducers(builder: ActionReducerMapBuilder<PlayersResultsSlice>) {
    builder
        .addCase(thunkGetMatchResults.pending, (state) => {
            state.status = StatusRequest.PENDING;
        })
        .addCase(thunkGetMatchResults.rejected, (state, action) => {
            state.status = StatusRequest.REJECT;
            state.error = action.payload as string;
        })
        .addCase(thunkGetMatchResults.fulfilled, (state, action: PayloadAction<TournamentGroup[]>) => {
            state.tournamentGroups = action.payload;
            state.status = StatusRequest.SUCCESS;
            state.error = '';
        });
}