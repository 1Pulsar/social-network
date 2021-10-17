let initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 5,
    isFetching: false
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
            return {...finderPage, currentPage: action.page}
        case 'SET-TOTAL-COUNT':
            return {...finderPage, totalCount: action.totalCount}
        case 'IS-FETCHING':
            return {...finderPage, isFetching: action.toggleFetching}
        default:
            return finderPage
    }
}

export const follow = (id) => ({type: 'FOLLOW', id})

export const unfollow = (id) => ({type: 'UNFOLLOW', id})

export const setUsers = (users) => ({type: 'SET-USERS', users})

export const changePage = (page) => ({type: 'CHANGE-PAGE', page})

export const setTotalCount = (totalCount) => ({type: 'SET-TOTAL-COUNT', totalCount})

export const toggleFetching = (toggleFetching) => ({type: 'IS-FETCHING', toggleFetching})

export default finderPageReducer