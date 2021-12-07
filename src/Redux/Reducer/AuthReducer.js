import { loginAPI, profileAPI, samuraiAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_PARAMS = 'authReducer/SET_AUTH_PARAMS'
const SET_AUTH_PROFILE_DATA = 'authReducer/SET_AUTH_PROFILE_DATA'
const SET_AUTHORIZED = 'authReducer/SET_AUTHORIZED'
const SET_MY_STATUS = 'authReducer/SET_MY_STATUS'
const LOGOUT_USER = 'authReducer/LOGOUT_USER'
const SET_NEW_AVATAR = 'authReducer/SET_NEW_AVATAR'

const initialState = {
    id: null,
    login: null,
    email: null,
    avatar: null,
    isAuthorized: false,
    aboutMe: null,
    contacts: null,
    lookingForAJob: null,
    lookingForAJobDescription: null
}

const authReducer = (authParams = initialState, action) => {
    switch (action.type) {
        case 'authReducer/SET_AUTH_PARAMS':
            return { ...authParams, id: action.data.id, login: action.data.login, email: action.data.email }
        case 'authReducer/SET_AUTH_PROFILE_DATA':
            return { ...authParams, avatar: action.data.photos.large, aboutMe: action.data.aboutMe,
                    contacts: action.data.contacts, lookingForAJob: action.data.lookingForAJob,
                    lookingForAJobDescription: action.data.lookingForAJobDescription }
        case 'authReducer/SET_NEW_AVATAR':
            return { ...authParams, avatar: action.newAvatar }
        case 'authReducer/SET_AUTHORIZED':
            return { ...authParams, isAuthorized: action.isAuthorized }
        case 'authReducer/SET_MY_STATUS':
            return { ...authParams, status: action.status }
        case 'authReducer/LOGOUT_USER':
            return { ...authParams, id: null, login: null, email: null, avatar: null, isAuthorized: false }
        default:
            return authParams
    }
}

export const setAuthParams = (data) => ({ type: SET_AUTH_PARAMS, data })
export const setAuthData = (data) => ({ type: SET_AUTH_PROFILE_DATA, data })
export const setAuthorized = (isAuthorized) => ({ type: SET_AUTHORIZED, isAuthorized })
export const setMyStatus = (status) => ({ type: SET_MY_STATUS, status })
export const SetNewAvatar = (newAvatar) => ({ type: SET_NEW_AVATAR, newAvatar })
export const logoutUser = () => ({ type: LOGOUT_USER })

export const authParamsThunk = () => (dispatch) => {
    return samuraiAPI.getMeAuth().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthorized(true))
            dispatch(setAuthParams(data.data))
            profileAPI.getProfile(data.data.id).then(data => {
                dispatch(setAuthData(data))
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

export const submitLoginDataThunk = (loginFormData) => async (dispatch) => {
    const data = await loginAPI.submitLogin(loginFormData.email, loginFormData.password, loginFormData.rememberMe)
    if (data.resultCode === 0) {
        dispatch(authParamsThunk())
    } else {
        const error = data.messages.length ? data.messages : 'Unexpected error'
        dispatch(stopSubmit('login', { _error: error }))
    }

}

export const logoutUserThunk = () => async (dispatch) => {
    const data = await loginAPI.logout()
    if (data.resultCode === 0) {
        dispatch(logoutUser())
    } else {
        alert('Something Wrong. Please, try again later')
    }
}

export const submitNewAvatarThunk = (newAvatarFile) => async (dispatch) => {
    const data = await profileAPI.changeProfileAvatar(newAvatarFile)
    if (data.resultCode === 0) {
        dispatch(SetNewAvatar(data.data.photos.large))
    } else {
        alert()
    }
}

export default authReducer
