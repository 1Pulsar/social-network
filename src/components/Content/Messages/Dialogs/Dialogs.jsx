import React from 'react'
import st from './Dialogs.module.css'

const Dialogs = (props) => {
    const messagesMapping = props.dialogElement.messagesData.map(
        m => <span className={`${st.message} ${(m.abonent === 'in') ? st.in : st.out}`}>{m.text}</span>)

    const textInput = React.createRef()

    const sendMassage = () => {
        let action = {type:'NEW-MESSAGE', id:props.dialogElement.id}
        props.dispatch(action)
    }
    //props.store.newMassage(props.dialogElement.id)

    const onTextareaChange = () => {
        let action = {type:'TEXTAREA-CHANGES', text:textInput.current.value, id:props.dialogElement.id}
        props.dispatch(action)
        //let text = textInput.current.value
        //props.store.textareaChanges(text, props.dialogElement.id)
    }

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
                <textarea ref={textInput} className={st.textInput} onChange={onTextareaChange} value = {props.dialogElement.textareaMassage}></textarea>
                <button className={st.sendButton} onClick={ sendMassage }>Send</button>
            </div>
        </div>

    )
}

export default Dialogs