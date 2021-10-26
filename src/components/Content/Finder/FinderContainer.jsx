import {connect} from "react-redux";
import {
    changePage,
    follow,
    setUsers, toggleFetching,
    setTotalCount,
    unfollow, toggleFollowing
} from "../../../Redux/Reducer/FinderPageReducer";
import React from "react";
import Finder from "./Finder";
import {samuraiAPI} from "../../../api/api";

class FinderAPI extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        samuraiAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleFetching(false)
            })
    }

    componentWillUnmount() {
        this.props.changePage(1)
    }

    changeCurrentPage = (p) => {
        this.props.toggleFetching(true)
        this.props.changePage(p)
        samuraiAPI.getUsers(this.props.pageSize, p)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleFetching(false)
            })
    }

    render = () => <Finder changeCurrentPage={this.changeCurrentPage}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           users={this.props.users}
                           totalCount={this.props.totalCount}
                           currentPage={this.props.currentPage}
                           pageSize={this.props.pageSize}
                           isFetching={this.props.isFetching}
                           toggleFollowing={this.props.toggleFollowing}
                           followingInProcess={this.props.followingInProcess} />

}

const mapStateToProps = state => ({
    users: state.finderPage.users,
    totalCount: state.finderPage.totalCount,
    currentPage: state.finderPage.currentPage,
    pageSize: state.finderPage.pageSize,
    isFetching: state.finderPage.isFetching,
    followingInProcess: state.finderPage.followingInProcess
})

const dispatchObject = {follow, unfollow, setUsers, setTotalCount, changePage, toggleFetching, toggleFollowing}

const FinderContainer = connect(mapStateToProps, dispatchObject)(FinderAPI)

export default FinderContainer