import {RootState} from "app/store";


export class PlayersResultsSelectors {
    static _tournamentsGroups = (state: RootState) => state.playersResults.tournamentGroups;
    static _leaderBoard = (state: RootState) => state.playersResults.leaderBoard;
}
