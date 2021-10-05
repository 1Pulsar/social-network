import React from 'react'
import './App.css';
import ProfileHead from "./components/ProfileHead/ProfileHead";
import InfoBar from "./components/InfoBar/InfoBar";
import Content from "./components/Content/Content";

const App = () => {
    return (
        <div className='app-wrapper'>
            <ProfileHead />
            <InfoBar />
            <Content />
        </div>
    );
}

export default App;
