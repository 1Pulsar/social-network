import React from 'react'
import st from './Dialogs.module.css'
import {Route} from "react-router-dom";

const Dialogs = (props) => {
    const messagesMapping = props.dialogElement.messagesData.map(
        m => <span className={`${st.message} ${(m.abonent === 'in') ? st.in : st.out}`}>{m.text}</span>)

    return (
        <div className={st.content}>
            <div className={st.dialogHead}>
                {props.dialogElement.name} <br/>
                {props.dialogElement.status}
            </div>

            <div className={st.dialogContent}>
                {messagesMapping}
            </div>
            <div className={st.inputArea}>

            </div>
        </div>

    )
}

export default Dialogs