import React from 'react'
import {onTextareaChangeActionCreator, sendMassageActionCreator} from "../../../../Redux/Reducer/MessagePageReducer";
import Dialogs from "./Dialogs";
import contentContext from "../../../../ContentContext";

const DialogsContainer = (props) => {
    return (
        <contentContext>
            {store => {
                const sendMassageContainer = (id) => store.dispatch(sendMassageActionCreator(id))
                const onTextareaChangeContainer = (text, id) => store.dispatch(onTextareaChangeActionCreator(text, id))

                return <Dialogs dialogElement={props.dialogElement} sendMassageContainer={sendMassageContainer}
                                onTextareaChangeContainer={onTextareaChangeContainer}/>
            }}
        </contentContext>
    )
}

export default DialogsContainer