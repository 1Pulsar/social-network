import Messages from "./Messages";
import contentContext from "../../../ContentContext";
import {onTextareaChangeActionCreator, sendMassageActionCreator} from "../../../Redux/Reducer/MessagePageReducer";

const MessagesContainer = () => {
    return (
    <contentContext.Consumer>
        {(store) => {
            const sendMassageContainer = (id) => store.dispatch(sendMassageActionCreator(id))
            const onTextareaChangeContainer = (text, id) => store.dispatch(onTextareaChangeActionCreator(text, id))

            return <Messages messagesPage={store.getState().messagesPage} sendMassageContainer={sendMassageContainer}
                              onTextareaChangeContainer={onTextareaChangeContainer}/>}}
    </contentContext.Consumer>
    )}

export default MessagesContainer