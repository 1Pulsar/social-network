import React from "react";
import {
    authParamsThunk,
    newStatusThunk,
    getMyStatusThunk,
    submitNewAvatarThunk
} from "../../../../Redux/Reducer/AuthReducer";
import UserInfo from "./UserInfo";
import { connect } from "react-redux";

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
        submitNewAvatarThunk={this.props.submitNewAvatarThunk}
        aboutMe={this.props.aboutMe}
        contacts={this.props.contacts}
        lookingForAJob={this.props.lookingForAJob}
        lookingForAJobDescription={this.props.lookingForAJobDescription} />
}

const mapStateToProps = state => ({
    login: state.authParams.login,
    avatar: state.authParams.avatar,
    isAuthorized: state.authParams.isAuthorized,
    status: state.authParams.status,
    id: state.authParams.id,
    aboutMe: state.authParams.aboutMe,
    contacts: state.authParams.contacts,
    lookingForAJob: state.authParams.lookingForAJob,
    lookingForAJobDescription: state.authParams.lookingForAJobDescription
})

const dispatchObject = { authParamsThunk, newStatusThunk, getMyStatusThunk, submitNewAvatarThunk }

export const UserInfoContainer = connect(mapStateToProps, dispatchObject)(UserInfoAPI)