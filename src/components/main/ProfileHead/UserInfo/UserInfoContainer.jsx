import React from "react";
import {authParamsThunk, newStatusThunk, getMyStatusThunk} from "../../../../Redux/Reducer/AuthReducer";
import UserInfo from "./UserInfo";
import {connect} from "react-redux";

class UserInfoAPI extends React.Component {
    componentDidMount() {
        this.props.authParamsThunk()
    }

    state = {
        statusEditMode: false,
        status: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    statusIsChanged = (event) => {
        this.setState({status: event.target.value})
    }

    statusEdit = (bool) => {
        if (!bool) this.props.newStatusThunk(this.state.status)
        this.setState({
            statusEditMode: bool
        })
    }

    render = () => <UserInfo status={this.state.status} statusEditMode={this.state.statusEditMode}
                             login={this.props.login} avatar={this.props.avatar}
                             isAuthorized={this.props.isAuthorized}
                             statusIsChanged={this.statusIsChanged} statusEdit={this.statusEdit}/>
}

const mapStateToProps = state => ({
    login: state.authParams.login,
    avatar: state.authParams.avatar,
    isAuthorized: state.authParams.isAuthorized,
    status: state.authParams.status,
    id: state.authParams.id
})

const dispatchObject = {authParamsThunk, newStatusThunk, getMyStatusThunk}

export const UserInfoContainer = connect(mapStateToProps, dispatchObject)(UserInfoAPI)