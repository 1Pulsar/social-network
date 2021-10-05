import React from 'react'
import './App.css';
import ProfileHead from "./components/ProfileHead/ProfileHead";
import InfoBar from "./components/InfoBar/InfoBar";
import Posts from "./components/Content/Posts/Posts";

const App = () => {
    return (
        <div className='app-wrapper'>
            <ProfileHead />
            <InfoBar />
            <Posts />
        </div>
    );
}

export default App;
