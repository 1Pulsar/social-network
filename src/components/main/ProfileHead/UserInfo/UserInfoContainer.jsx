import React from "react";
import {
    authParamsThunk,
    newStatusThunk,
    getMyStatusThunk,
    logoutUserThunk
} from "../../../../Redux/Reducer/AuthReducer";
import UserInfo from "./UserInfo";
import {connect} from "react-redux";

class UserInfoAPI extends React.Component {
    componentDidMount() {
        this.props.authParamsThunk()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render = () => <UserInfo status={this.props.status} newStatusThunk={this.props.newStatusThunk}
                             login={this.props.login} avatar={this.props.avatar}
                             isAuthorized={this.props.isAuthorized}
                             logoutUserThunk={this.props.logoutUserThunk} />
}

const mapStateToProps = state => ({
    login: state.authParams.login,
    avatar: state.authParams.avatar,
    isAuthorized: state.authParams.isAuthorized,
    status: state.authParams.status,
    id: state.authParams.id
})

const dispatchObject = {authParamsThunk, newStatusThunk, getMyStatusThunk, logoutUserThunk}

export const UserInfoContainer = connect(mapStateToProps, dispatchObject)(UserInfoAPI)