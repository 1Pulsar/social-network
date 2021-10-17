import {connect} from "react-redux";
import {
    changePage,
    follow,
    setUsers, toggleFetching,
    setTotalCount,
    unfollow
} from "../../../Redux/Reducer/FinderPageReducer";
import React from "react";
import * as axios from "axios";
import Finder from "./Finder";

class FinderAPI extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleFetching(false)
            })
    }

    componentWillUnmount() {
        this.props.changePage(1)
    }

    changeCurrentPage = (p) => {
        this.props.toggleFetching(true)
        this.props.changePage(p)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
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
                           isFetching={this.props.isFetching}/>

}

const mapStateToProps = state => ({
    users: state.finderPage.users,
    totalCount: state.finderPage.totalCount,
    currentPage: state.finderPage.currentPage,
    pageSize: state.finderPage.pageSize,
    isFetching: state.finderPage.isFetching
})

const dispatchObject = {follow, unfollow, setUsers, setTotalCount, changePage, toggleFetching}

const FinderContainer = connect(mapStateToProps, dispatchObject)(FinderAPI)

export default FinderContainer