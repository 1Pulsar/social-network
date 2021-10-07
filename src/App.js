import React from 'react'
import './App.css';
import ProfileHead from "./components/ProfileHead/ProfileHead";
import InfoBar from "./components/InfoBar/InfoBar";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <ProfileHead/>
                <InfoBar/>
                <Content data={props.data}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
