import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {reducers} from "./lib/reducers";
import {socketMiddleware} from "./middleware/socketMiddleware";
import {AppDispatch, RootState} from "./types";


export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            socketMiddleware(),
        ),
    devTools: import.meta.env.NODE_ENV === 'development',
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type {RootState} from 'app/store/types';
export {select} from './lib/selectors';
