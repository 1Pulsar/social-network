import React from 'react'
import st from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Users from "./Users/Users";

const Messages = () => {
    return (
        <div className={st.content}>
            <Users />
            <div className={st.space}></div>
            <Dialogs />
        </div>
    )
}

export default Messages