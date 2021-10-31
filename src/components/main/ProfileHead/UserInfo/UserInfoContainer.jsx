import React from "react";
import {authParamsThunk, newStatusThunk, getMyStatusThunk} from "../../../../Redux/Reducer/AuthReducer";
import UserInfo from "./UserInfo";
import {connect} from "react-redux";

class UserInfoAPI extends React.Component {
    componentDidMount() {
        this.props.authParamsThunk()
    }

    render = () => <UserInfo {...this.props} />
}

const mapStateToProps = state =>({
    login: state.authParams.login,
    avatar: state.authParams.avatar,
    isAuthorized: state.authParams.isAuthorized,
    status: state.authParams.status,
    id: state.authParams.id
})

const dispatchObject = {authParamsThunk, newStatusThunk, getMyStatusThunk}

export const UserInfoContainer = connect(mapStateToProps, dispatchObject)(UserInfoAPI)