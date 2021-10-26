import React from "react";
import {setAuthAvatar, setAuthorized, setAuthParams} from "../../../Redux/Reducer/AuthReducer";
import UserInfo from "./UserInfo";
import {connect} from "react-redux";
import {samuraiAPI} from "../../../api/api";

class UserInfoAPI extends React.Component {
    componentDidMount() {
        samuraiAPI.getMeAuth().then(data => {
                if (data.resultCode == 0) {
                    this.props.setAuthorized(true)
                    this.props.setAuthParams(data.data)
                    samuraiAPI.getProfile(data.data.id).then(data => {
                            setAuthAvatar(data.photos.small)
                    })
                } else {this.props.setAuthorized(false)}
            })
    }

    render = () => <UserInfo {...this.props} />
}

const mapStateToProps = state => ({
  login: state.authParams.login,
  avatar: state.authParams.avatar,
  isAuthorized: state.authParams.isAuthorized
})

const dispatchObject = {setAuthParams, setAuthAvatar, setAuthorized}

export const UserInfoContainer = connect(mapStateToProps, dispatchObject)(UserInfoAPI)