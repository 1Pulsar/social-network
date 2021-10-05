import React from 'react'
import st from './Content.module.css'
import Settings from "./Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Media from "./Media/Media";
import Messages from "./Messages/Messages";
import Overview from "./Overview/Overview";
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <BrowserRouter>
        <div className={st.content}>
            <Route path='/media' component={Media} />
            <Route path='/messages' component={Messages} />
            <Route path='/overview' component={Overview} />
            <Route path='/posts' component={Posts} />
            <Route path='/settings' component={Settings} />
        </div>
        </BrowserRouter>
    )
}

export default Content