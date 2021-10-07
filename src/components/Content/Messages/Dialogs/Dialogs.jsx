import React from 'react'
import st from './Dialogs.module.css'
import {Route} from "react-router-dom";

const Dialogs = (props) => {
    const messagesMapping = props.dialogElement.messagesData.map(
        m => <span className={`${st.message} ${(m.abonent === 'in') ? st.in : st.out}`}>{m.text}</span>)
    const textInput = React.createRef()
    const sendMassage = () => props.newMassage(textInput.current.value)

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
                <textarea ref={textInput} className={st.textInput}></textarea>
                <button className={st.sendButton} onClick={ sendMassage }>Send</button>
            </div>
        </div>

    )
}

export default Dialogs