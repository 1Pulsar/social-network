import React from 'react'
import st from './Dialogs.module.css'

const Dialogs = (props) => {
    const messagesMapping = props.dialogElement.messagesData.map(
        m => <span className={`${st.message} ${(m.abonent === 'in') ? st.in : st.out}`}>{m.text}</span>)

    const sendMassage = () => props.sendMassageContainer(props.dialogElement.id)

    const onTextareaChange = (event) => props.onTextareaChangeContainer(event.target.value, props.dialogElement.id)

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
                <textarea placeholder='Enter your message' className={st.textInput} onChange={onTextareaChange} value = {props.dialogElement.textareaMassage}></textarea>
                <button className={st.sendButton} onClick={ sendMassage }>Send</button>
            </div>
        </div>

    )
}

export default Dialogs