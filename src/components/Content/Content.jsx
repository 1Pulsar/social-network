import React from 'react'
import st from './Content.module.css'
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";
import Media from "./Media/Media";
import Messages from "./Messages/Messages";
import Overview from "./Overview/Overview";
import Posts from "./Posts/Posts";
import {textareaChanges} from "../../React/Data";

const Content = (props) => {
    return (
        <div className={st.content}>
            <Route path='/media' render={() => <Media/>}/>
            <Route path='/messages' render={() => <Messages messagesPage={props.data.messagesPage} newMassage={props.newMassage} textareaChanges={props.textareaChanges}/>}/>
            <Route path='/overview' render={() => <Overview/>}/>
            <Route path='/posts' render={() => <Posts postsPage={props.data.postsPage}/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    )
}

export default Content