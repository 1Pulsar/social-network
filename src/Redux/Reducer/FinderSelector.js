export const getUsers = (state) => {
    return state.finderPage.users
}

export const getTotalCount = (state) => {
    return state.finderPage.totalCount
}

export const getCurrentPage = (state) => {
    return state.finderPage.currentPage
}

export const getPageSize = (state) => {
    return state.finderPage.pageSize
}

export const getIsFetching = (state) => {
    return state.finderPage.isFetching
}

export const getFollowingInProcess = (state) => {
    return state.finderPage.followingInProcess
}