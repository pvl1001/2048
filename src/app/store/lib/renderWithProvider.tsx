import {EnhancedStore} from '@reduxjs/toolkit';
import type {RenderOptions} from '@testing-library/react';
import {render} from '@testing-library/react';
import {PropsWithChildren, ReactElement} from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {store} from "../";
import {RootState} from "../types";

// As a basic setup, import your same slice reducers

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: EnhancedStore<RootState>;
}

export function renderWithProviders(
    ui: ReactElement,
    extendedRenderOptions: ExtendedRenderOptions = {}
) {
    const {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        ...renderOptions
    } = extendedRenderOptions;

    const Wrapper = ({children}: PropsWithChildren) => (
        <Provider store={store}>
            <MemoryRouter>
                <Routes>
                    <Route path={'/'} element={children}/>
                </Routes>
            </MemoryRouter>
        </Provider>
    );

    // Return an object with the store and all of RTL's query functions
    return {
        store,
        ...render(ui, {wrapper: Wrapper, ...renderOptions})
    };
}