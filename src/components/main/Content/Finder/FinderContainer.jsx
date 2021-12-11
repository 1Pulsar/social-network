import {connect} from "react-redux";
import {
    changePage,
    toggleFetching,
    SetUsersThunk,
    followingButtonThunk
} from "../../../../Redux/Reducer/FinderPageReducer";
import React from "react";
import Finder from "./Finder";
import {
    getCurrentPage,
    getFollowingInProcess,
    getIsFetching,
    getPageSize,
    getTotalCount, getUsers
} from "../../../../Redux/Reducer/FinderSelector";

class FinderAPI extends React.Component {
    componentDidMount() {
        this.props.SetUsersThunk(this.props.pageSize, this.props.currentPage)
    }

    componentWillUnmount() {
        this.props.changePage(1)
    }

    changeCurrentPage = (p) => {
        this.props.toggleFetching(true)
        this.props.changePage(p)
        this.props.SetUsersThunk(this.props.pageSize, p)
    }

    render = () => <Finder changeCurrentPage={this.changeCurrentPage}
                           users={this.props.users}
                           totalCount={this.props.totalCount}
                           currentPage={this.props.currentPage}
                           pageSize={this.props.pageSize}
                           isFetching={this.props.isFetching}
                           followingInProcess={this.props.followingInProcess}
                           followingButtonThunk={this.props.followingButtonThunk}/>

}

const mapStateToProps = state => ({
    users: getUsers(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    followingInProcess: getFollowingInProcess(state)
})

const dispatchObject = {changePage, toggleFetching, SetUsersThunk, followingButtonThunk}

const FinderContainer = connect(mapStateToProps, dispatchObject)(FinderAPI)

export default FinderContainer