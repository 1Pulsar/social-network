import Messages from "./Messages";
import {onTextareaChangeActionCreator, sendMassageActionCreator} from "../../../Redux/Reducer/MessagePageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage
})

let mapDispatchToProps = (dispatch) => ({
    sendMassageContainer: (id) => dispatch(sendMassageActionCreator(id)),
    onTextareaChangeContainer: (text, id) => dispatch(onTextareaChangeActionCreator(text, id))
})

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer