import {RootState} from "app/store";


export class FlagsSelectors {
    static _flags = (state: RootState) => state.flags;
}
