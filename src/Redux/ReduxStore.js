import {applyMiddleware, combineReducers, createStore} from "redux";
import messagePageReducer from "./Reducer/MessagePageReducer";
import postsPageReducer from "./Reducer/PostsPageReducer";
import finderPageReducer from "./Reducer/FinderPageReducer";
import userPageReducer from "./Reducer/UserPageReducer";
import authReducer from "./Reducer/AuthReducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import appReducer from "./Reducer/AppReducer";


let reducers = combineReducers({
    messagesPage: messagePageReducer,
    postsPage: postsPageReducer,
    finderPage: finderPageReducer,
    userPage: userPageReducer,
    authParams: authReducer,
    appParams: appReducer,
    form: formReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))