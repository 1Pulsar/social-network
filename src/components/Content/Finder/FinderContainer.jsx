import {connect} from "react-redux";
import {
    changePageAC,
    followAC,
    setUsersAC,
    totalCountAC,
    unfollowAC
} from "../../../Redux/Reducer/FinderPageReducer";
import React from "react";
import * as axios from "axios";
import Finder from "./Finder";

class FinderAPI extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    componentWillUnmount() {
        this.props.changePage(1)
    }

    changeCurrentPage = (p) => {
        this.props.changePage(p)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    render = () => <Finder changeCurrentPage={this.changeCurrentPage}
                           subscriptionAction={this.props.subscriptionAction}
                           users={this.props.users}
                           totalCount={this.props.totalCount}
                           currentPage={this.props.currentPage}
                           pageSize={this.props.pageSize} />

}

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

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(FinderAPI)

export default FinderContainer
