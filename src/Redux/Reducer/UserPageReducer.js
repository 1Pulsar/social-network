import {profileAPI} from "../../api/api";

const initialState = {
    pageInformation: {
        aboutMe: '',
        contacts: {},
        lookingForAJob: null,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            large: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
            small: 'https://cdn-icons-png.flaticon.com/512/219/219983.png'
        }
    },
    isFetching: false
}

const userPageReducer = (userPage = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-PAGE':
            return {...userPage, pageInformation: action.gettedPageInformation}
        case 'IS-FETCHING':
            return {...userPage, isFetching: action.toggleFetching}
        default:
            return userPage
    }
}

export const setUserPage = (gettedPageInformation) => ({type: 'SET-USER-PAGE', gettedPageInformation})
export const toggleFetching = (toggleFetching) => ({type: 'IS-FETCHING', toggleFetching})

export const setUserProfile = (userIdFromRouter) => (dispatch) => {
    dispatch(toggleFetching(true))
    profileAPI.getProfile(userIdFromRouter).then(data => {
        dispatch(setUserPage(data))
        dispatch(toggleFetching(false))
    })
}

export default userPageReducer