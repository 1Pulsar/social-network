import {connect} from "react-redux";
import {
    changePage,
    toggleFetching,
    SetUsersThunk,
    followingButtonThunk
} from "../../../../Redux/Reducer/FinderPageReducer";
import React from "react";
import Finder from "./Finder";

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
    users: state.finderPage.users,
    totalCount: state.finderPage.totalCount,
    currentPage: state.finderPage.currentPage,
    pageSize: state.finderPage.pageSize,
    isFetching: state.finderPage.isFetching,
    followingInProcess: state.finderPage.followingInProcess,
})

const dispatchObject = {changePage, toggleFetching, SetUsersThunk, followingButtonThunk}

const FinderContainer = connect(mapStateToProps, dispatchObject)(FinderAPI)

export default FinderContainer