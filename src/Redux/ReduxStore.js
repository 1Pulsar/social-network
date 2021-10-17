import {combineReducers, createStore} from "redux";
import messagePageReducer from "./Reducer/MessagePageReducer";
import postsPageReducer from "./Reducer/PostsPageReducer";
import finderPageReducer from "./Reducer/FinderPageReducer";

let reducers = combineReducers({
    messagesPage: messagePageReducer,
    postsPage: postsPageReducer,
    finderPage: finderPageReducer
})

export let store = createStore(reducers)