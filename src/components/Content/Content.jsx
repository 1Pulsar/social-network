import React from 'react'
import st from './Content.module.css'
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";
import Media from "./Media/Media";
import Overview from "./Overview/Overview";
import MessagesContainer from "./Messages/MessagesContainer";
import PostsContentContainer from "./PostsContent/PostsContentContainer";
import FinderContainer from "./Finder/FinderContainer";

const Content = (props) => {
    return (
        <div className={st.content}>
            <Route path='/media' render={() => <Media/>}/>
            <Route path='/messages' render={() => <MessagesContainer/>}/>
            <Route path='/overview' render={() => <Overview/>}/>
            <Route path='/finder' render={() => <FinderContainer/>}/>
            <PostsContentContainer/>
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    )
}

export default Content