import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TStatusRequest} from "shared/common/StatusRequest";
import {LeaderBoardResult, TournamentGroup} from "../types";
import {extraReducers} from "./PlayersResultsThunks";


export type PlayersResultsSlice = typeof initialState

let initialState = {
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

export let playersResultsActions = playersResultsSlice.actions;
export let playersResultsReducer = playersResultsSlice.reducer;