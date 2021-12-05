import React from 'react'
import st from './Messages.module.css'
import Users from "./Users/Users";
import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const Messages = (props) => {
    const routing = props.messagesPage.map( mesPageEl => <Route path = {`/messages/${mesPageEl.id}`} render = {
        () => <Dialogs dialogElement={mesPageEl} sendMassageContainer={props.sendMassageContainer}
                       onTextareaChangeContainer={props.onTextareaChangeContainer}/>} />)
    return (
        <div className={st.content}>
            <Users usersData = {props.messagesPage}/>
            <div className={st.space}></div>
            {routing}
        </div>
    )
}

export default Messages