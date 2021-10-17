
let initialState = {
    users:[],
    totalCount: 0,
    currentPage: 1,
    pageSize: 5
}

const finderPageReducer = (finderPage = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...finderPage, users: finderPage.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }
        case 'UNFOLLOW':
            return {
                ...finderPage, users: finderPage.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        case 'SET-USERS':
            return {...finderPage, users: action.users}
        case 'CHANGE-PAGE':
            return{...finderPage, currentPage: action.page}
        case 'SET-TOTAL-COUNT':
            return{...finderPage, totalCount: action.totalCount}
        default:
            return finderPage
    }
}

export const followAC = (id) => ({type:'FOLLOW', id})

export const unfollowAC = (id) => ({type:'UNFOLLOW', id})

export const setUsersAC = (users) => ({type:'SET-USERS', users})

export const changePageAC = (page) => ({type:'CHANGE-PAGE', page})

export const totalCountAC = (totalCount) => ({type:'SET-TOTAL-COUNT', totalCount})

export default finderPageReducer