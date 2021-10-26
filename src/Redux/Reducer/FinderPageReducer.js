import {samuraiAPI} from "../../api/api";

const initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 5,
    isFetching: false,
    followingInProcess: []
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
        case 'IS-FOLLOWING':
            return {...finderPage, followingInProcess: action.isFollowing ?
            [...finderPage.followingInProcess, action.id] :
                    finderPage.followingInProcess.filter(id => id != action.id)}
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

export const toggleFollowing = (isFollowing, id) => ({type: 'IS-FOLLOWING',isFollowing , id})

export const SetUsersThunk = (pageSize, currentPage) => (dispatch) => {
    dispatch(toggleFetching(true))
    samuraiAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(toggleFetching(false))
        })
    }

export const followingButtonThunk = (isFollowed, id) => (dispatch) => {
    dispatch(toggleFollowing(true, id))
    if (isFollowed) {
        samuraiAPI.unfollow(id)
            .then(data => {
                data.resultCode == 0 && dispatch(unfollow(id))
                dispatch(toggleFollowing(false, id))
            })
    } else {
        samuraiAPI.follow(id)
            .then(data => {
                data.resultCode == 0 && dispatch(follow(id))
                dispatch(toggleFollowing(false, id))
            })
    }

}

export default finderPageReducer