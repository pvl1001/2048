export type {Tournament} from './types';
export {tournamentsReducer} from './model/TournamentsSlice';
export {TournamentsSelectors} from './model/TournamentsSelectors';
export {thunkGetTournaments} from './model/TournamentsThunks';
export {TournamentsCard} from './ui/TournamentsCard';

export {useSliderSpaceBetween} from "./lib/useSliderSpaceBetween";
export {useTournaments} from "./lib/useTournaments";
export {mockTournaments} from "./lib/mockTournaments";
