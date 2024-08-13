import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {extraReducers} from "./PlayersResultsThunks";
import {LeaderBoardResult, TournamentGroup} from "../types";


export type PlayersResultsSlice = typeof initialState

const initialState = {
    tournamentGroups: [] as TournamentGroup[],
    leaderBoard: [] as LeaderBoardResult[],
    status: '' as TStatusRequest,
    error: '',
};

const playersResultsSlice = createSlice({
    name: 'playersResults',
    initialState,
    reducers: {
        setPlayersResults(state, action: PayloadAction<LeaderBoardResult[]>) {
            state.leaderBoard = action.payload;
        }
    },
    extraReducers
});

export const playersResultsActions = playersResultsSlice.actions;
export const playersResultsReducer = playersResultsSlice.reducer;