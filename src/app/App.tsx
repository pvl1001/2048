import "./styles/index.scss";
import React from "react";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {Loader} from "shared/ui/loader";
import {router} from "./router";
import {store} from "./store";


function App() {
    return (
        <Provider store={store}>
            <RouterProvider
                router={router}
                fallbackElement={<Loader/>}
            />
        </Provider>
    );
}

export default App;
