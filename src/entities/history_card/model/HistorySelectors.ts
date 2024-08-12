import {RootState} from "app/store";


export class HistorySelectors {
    static _data = (state: RootState) => state.history.data;
}
