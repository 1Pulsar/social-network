import {combineReducers, createStore} from "redux";
import messagePageReducer from "./Reducer/MessagePageReducer";
import postsPageReducer from "./Reducer/PostsPageReducer";
import finderPageReducer from "./Reducer/FinderPageReducer";
import userPageReducer from "./Reducer/UserPageReducer";

let reducers = combineReducers({
    messagesPage: messagePageReducer,
    postsPage: postsPageReducer,
    finderPage: finderPageReducer,
    userPage: userPageReducer
})

export let store = createStore(reducers)