import {connect} from "react-redux";
import Finder from "./Finder";
import {
    changePageAC,
    followAC,
    setUsersAC,
    totalCountAC,
    unfollowAC
} from "../../../Redux/Reducer/FinderPageReducer";

const mapStateToProps = state => ({
    users: state.finderPage.users,
    totalCount: state.finderPage.totalCount,
    currentPage: state.finderPage.currentPage,
    pageSize: state.finderPage.pageSize
})

const mapDispatchToProps = dispatch => ({
    subscriptionAction: (id, subscription) => {
        if (subscription) {
            dispatch(unfollowAC(id))
        } else {
            dispatch(followAC(id))
        }
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    setTotalCount: (totalCount) => {
        dispatch(totalCountAC(totalCount))
    },
    changePage: (page) => {
        dispatch(changePageAC(page))
    }
})

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder)

export default FinderContainer
