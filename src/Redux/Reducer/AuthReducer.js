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
            return { ...authParams, id:action.data.id, login:action.data.login, email:action.data.email}
        case 'SET-AUTH-AVATAR':
            return {...authParams, avatar:action.avatar}
        case 'SET-AUTHORIZED':
            return {...authParams, isAuthorized: action.isAuthorized}
        default:
            return authParams
    }
}

export const setAuthParams = (data) => ({type: 'SET-AUTH-PARAMS', data})
export const setAuthAvatar = (avatar) => ({type:'SET-AUTH-AVATAR', avatar})
export const setAuthorized = (isAuthorized) => ({type:'SET-AUTHORIZED', isAuthorized})

export default authReducer
