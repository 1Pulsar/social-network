import {authParamsThunk} from "./AuthReducer";

const initialState = {
    isInitialized: false
}

const appReducer = (appParams = initialState, action) => {
    switch (action.type) {
        case 'APP-IS-INITIALIZED':
            return ({...appParams, isInitialized: true})
        default:
            return appParams
    }
}

export const appIsInitialized = () => ({type: 'APP-IS-INITIALIZED'})

export const appInitializationThunk = () => (dispatch) => {
    dispatch(authParamsThunk()).then(() => {
        dispatch(appIsInitialized())
    })
}

export default appReducer