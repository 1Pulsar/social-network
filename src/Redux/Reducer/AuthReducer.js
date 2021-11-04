import {loginAPI, profileAPI, samuraiAPI} from "../../api/api";

const initialState = {
    id: null,
    login: null,
    email: null,
    avatar: null,
    isAuthorized: false
}

const authReducer = (authParams = initialState, action) => {
    switch (action.type) {
        case 'SET-AUTH-PARAMS':
            return {...authParams, id: action.data.id, login: action.data.login, email: action.data.email}
        case 'SET-AUTH-AVATAR':
            return {...authParams, avatar: action.avatar}
        case 'SET-AUTHORIZED':
            return {...authParams, isAuthorized: action.isAuthorized}
        case 'SET-MY-STATUS':
            return {...authParams, status: action.status}
        default:
            return authParams
    }
}

export const setAuthParams = (data) => ({type: 'SET-AUTH-PARAMS', data})
export const setAuthAvatar = (avatar) => ({type: 'SET-AUTH-AVATAR', avatar})
export const setAuthorized = (isAuthorized) => ({type: 'SET-AUTHORIZED', isAuthorized})
export const setMyStatus = (status) => ({type:'SET-MY-STATUS', status})

export const authParamsThunk = () => (dispatch) => {
    samuraiAPI.getMeAuth().then(data => {
        if (data.resultCode == 0) {
            dispatch(setAuthorized(true))
            dispatch(setAuthParams(data.data))
            profileAPI.getProfile(data.data.id).then(data => {
                dispatch(setAuthAvatar(data.photos.small))
            })
            profileAPI.getProfileStatus(data.data.id).then(response => {
                dispatch(setMyStatus(response.data))
            })
        } else {
            dispatch(setAuthorized(false))
        }
    })
}

export const getMyStatusThunk = (id) => (dispatch) => {
    profileAPI.getProfileStatus(id).then(response => {
        dispatch(setMyStatus(response.data))
    })
}

export const newStatusThunk = (status) => (dispatch) => {
    profileAPI.changeProfileStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setMyStatus(status))
            }
        })
}

export const submitLoginDataThunk = (loginFormData) => (dispatch) => {
    loginAPI.submitLogin(loginFormData.email, loginFormData.password, loginFormData.rememberMe).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(authParamsThunk())
        } else {
            alert('Login or pass not correct')
        }
    })
}



export default authReducer
