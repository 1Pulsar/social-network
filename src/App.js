import React from 'react'
import './App.css';
import ProfileHead from "./components/ProfileHead/ProfileHead";
import InfoBar from "./components/InfoBar/InfoBar";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {textareaChanges} from "./React/Data";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <ProfileHead/>
                <InfoBar/>
                <Content data={props.data} newMassage={props.newMassage} textareaChanges={props.textareaChanges}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
