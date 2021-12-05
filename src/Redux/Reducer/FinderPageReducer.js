import {samuraiAPI} from "../../api/api";

const TAKE_FOLLOW_UNFOLLOW = 'finderPage/TAKE_FOLLOW_UNFOLLOW'
const SET_USERS = 'finderPage/SET_USERS'
const CHANGE_PAGE = 'finderPage/CHANGE_PAGE'
const SET_TOTAL_COUNT = 'finderPage/SET_TOTAL_COUNT'
const IS_FETCHING = 'finderPage/IS_FETCHING'
const IS_FOLLOWING = 'finderPage/IS_FOLLOWING'

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
        case 'finderPage/TAKE_FOLLOW_UNFOLLOW':
            return {
                ...finderPage, users: finderPage.users.map(u => {
                    return u.id === action.id ? {...u, followed: !action.isFollowed} : u
                })
            }
        case 'finderPage/SET_USERS':
            return {...finderPage, users: action.users}
        case 'finderPage/CHANGE_PAGE':
            return {...finderPage, currentPage: action.page}
        case 'finderPage/SET_TOTAL_COUNT':
            return {...finderPage, totalCount: action.totalCount}
        case 'finderPage/IS_FETCHING':
            return {...finderPage, isFetching: action.toggleFetching}
        case 'finderPage/IS_FOLLOWING':
            return {
                ...finderPage, followingInProcess: action.isFollowing ?
                    [...finderPage.followingInProcess, action.id] :
                    finderPage.followingInProcess.filter(id => id !== action.id)
            }
        default:
            return finderPage
    }
}

export const makeFollowUnfollow = (id, isFollowed) => ({type: TAKE_FOLLOW_UNFOLLOW, id, isFollowed})

export const setUsers = (users) => ({type: SET_USERS, users})

export const changePage = (page) => ({type: CHANGE_PAGE, page})

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})

export const toggleFetching = (toggleFetching) => ({type: IS_FETCHING, toggleFetching})

export const toggleFollowing = (isFollowing, id) => ({type: IS_FOLLOWING, isFollowing, id})

export const SetUsersThunk = (pageSize, currentPage) => (dispatch) => {
    dispatch(toggleFetching(true))
    samuraiAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(toggleFetching(false))
        })
}

export const followingButtonThunk = (isFollowed, id) => async (dispatch) => {
    dispatch(toggleFollowing(true, id))
    const data = await samuraiAPI.takeFollowUnfollowData(id, isFollowed)
    data.resultCode === 0 && dispatch(makeFollowUnfollow(id, isFollowed))
    dispatch(toggleFollowing(false, id))
}

export default finderPageReducer