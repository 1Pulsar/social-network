import React from 'react'
import st from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Users from "./Users/Users";
import {Route} from "react-router-dom";

const Messages = (props) => {
    const routing = props.messagesPage.map( mesPageEl => <Route path = {`/messages/${mesPageEl.id}`} render = {
        () => <Dialogs dialogElement={mesPageEl} dispatch = {props.dispatch}/>} />)
    return (
        <div className={st.content}>
            <Users usersData = {props.messagesPage}/>
            <div className={st.space}></div>
            {routing}
        </div>
    )
}

export default Messages