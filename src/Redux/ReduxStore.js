import {applyMiddleware, combineReducers, createStore} from "redux";
import messagePageReducer from "./Reducer/MessagePageReducer";
import postsPageReducer from "./Reducer/PostsPageReducer";
import finderPageReducer from "./Reducer/FinderPageReducer";
import userPageReducer from "./Reducer/UserPageReducer";
import authReducer from "./Reducer/AuthReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    messagesPage: messagePageReducer,
    postsPage: postsPageReducer,
    finderPage: finderPageReducer,
    userPage: userPageReducer,
    authParams: authReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))