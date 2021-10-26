import React from "react";
import {authParamsThunk} from "../../../Redux/Reducer/AuthReducer";
import UserInfo from "./UserInfo";
import {connect} from "react-redux";

class UserInfoAPI extends React.Component {
    componentDidMount() {
        this.props.authParamsThunk()
    }

    render = () => <UserInfo {...this.props} />
}

const mapStateToProps = state => ({
  login: state.authParams.login,
  avatar: state.authParams.avatar,
  isAuthorized: state.authParams.isAuthorized
})

const dispatchObject = {authParamsThunk}

export const UserInfoContainer = connect(mapStateToProps, dispatchObject)(UserInfoAPI)