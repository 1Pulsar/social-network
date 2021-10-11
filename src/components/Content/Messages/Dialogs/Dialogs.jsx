import React from 'react'
import st from './Dialogs.module.css'
import {onTextareaChangeActionCreator, sendMassageActionCreator} from "../../../../React/Reducer/MessagePageReducer";

const Dialogs = (props) => {
    const messagesMapping = props.dialogElement.messagesData.map(
        m => <span className={`${st.message} ${(m.abonent === 'in') ? st.in : st.out}`}>{m.text}</span>)

    const textInput = React.createRef()

    const sendMassage = () => sendMassageActionCreator(props.dialogElement.id)

    const onTextareaChange = () => onTextareaChangeActionCreator(textInput.current.value, props.dialogElement.id)

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
                <textarea placeholder='Enter your message' ref={textInput} className={st.textInput} onChange={onTextareaChange} value = {props.dialogElement.textareaMassage}></textarea>
                <button className={st.sendButton} onClick={ sendMassage }>Send</button>
            </div>
        </div>

    )
}

export default Dialogs