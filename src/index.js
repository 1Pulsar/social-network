import './index.css';
import reportWebVitals from './reportWebVitals';
import data, {call, newMassage, textareaChanges} from "./React/Data";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const rerenderEntireTree = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={data} newMassage={newMassage} textareaChanges={textareaChanges} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(data)

call(rerenderEntireTree)

reportWebVitals();
