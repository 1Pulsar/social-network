import React from 'react'
import './App.css';
import ProfileHead from "./components/ProfileHead/ProfileHead";
import InfoBar from "./components/InfoBar/InfoBar";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <ProfileHead />
            <InfoBar />
            <Content />
        </div>
        </BrowserRouter>
    );
}

export default App;
