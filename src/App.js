import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {MainComponentContainer} from "./components/main/MainComponentsContainer";
import LoginPage from "./components/main/LoginPage/LoginPage";

const App = (props) => {
    return (
        <BrowserRouter>
            <MainComponentContainer/>
            <Route path='/login' render={() => <LoginPage/>}/>
        </BrowserRouter>
    );
}

export default App;
