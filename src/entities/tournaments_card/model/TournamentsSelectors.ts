import {RootState} from "app/store";


export class TournamentsSelectors {
    static _data = (state: RootState) => state.tournaments.data;
}
