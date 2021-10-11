import {store} from "../Data";

const messagePageReducer = (action, messagesPage) => {
    switch (action.type) {
        case 'NEW-MESSAGE':
            let newMessage = {id: 10, abonent: 'in', text: messagesPage[action.id - 1].textareaMassage}
            messagesPage[action.id - 1].messagesData.push(newMessage)
            messagesPage[action.id - 1].textareaMassage = ''
            return messagesPage
        case'MESSAGE-TEXTAREA-CHANGES':
            messagesPage[action.id - 1].textareaMassage = action.text
            return messagesPage
        default:
            return messagesPage
    }
}

export const sendMassageActionCreator = (id) => {
    let action = {type: 'NEW-MESSAGE', id: id}
    store.dispatch(action)
}
export const onTextareaChangeActionCreator = (text, id) => {
    let action = {type: 'MESSAGE-TEXTAREA-CHANGES', text: text, id: id}
    store.dispatch(action)
}

export default messagePageReducer