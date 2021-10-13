import {combineReducers, createStore} from "redux";
import messagePageReducer from "./Reducer/MessagePageReducer";
import postsPageReducer from "./Reducer/PostsPageReducer";

let reducers = combineReducers({
    messagesPage: messagePageReducer,
    postsPage: postsPageReducer,
})

export let store = createStore(reducers)