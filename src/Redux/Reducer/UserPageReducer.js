const initialState = {
    pageInformation: {
        aboutMe: '',
        contacts: {},
        lookingForAJob: null,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {}
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

export const setUserPage = (gettedPageInformation) => ({type:'SET-USER-PAGE', gettedPageInformation})
export const toggleFetching = (toggleFetching) => ({type: 'IS-FETCHING', toggleFetching})

export default userPageReducer