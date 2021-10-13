import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./Redux/ReduxStore";
import contentContext from "./ContentContext";

const rerenderEntireTree = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <contentContext.Provider value={store}>
            <App />
            </contentContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe( () => rerenderEntireTree(store.getState()))

reportWebVitals();
