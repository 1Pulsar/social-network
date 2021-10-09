import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./React/Data";

let data = store.getData()

const rerenderEntireTree = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App data = {data} dispatch = {store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(data)

store.getRender(rerenderEntireTree)

reportWebVitals();
