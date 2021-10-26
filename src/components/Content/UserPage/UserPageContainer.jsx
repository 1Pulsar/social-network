import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../../Redux/Reducer/UserPageReducer";
import UserPage from "./UserPage";
import {withRouter} from "react-router-dom";

class UserPageAPI extends React.Component {
    componentDidMount() {
        const userIdFromRouter = this.props.match.params.userId
        this.props.setUserProfile(userIdFromRouter)
    }

    render() {
        return <UserPage id={this.props.id}
                         photos={this.props.photos}
                         fullName={this.props.fullName}
                         isFetching={this.props.isFetching}/>
    }
}

const mapStateToProps = state => ({
    id: state.userPage.pageInformation.userId,
    photos: state.userPage.pageInformation.photos,
    fullName: state.userPage.pageInformation.fullName,
    isFetching: state.userPage.isFetching
})

const dispatchObject = {setUserProfile}

const UserPageURLRouting = withRouter(UserPageAPI)

const UserPageContainer = connect(mapStateToProps, dispatchObject)(UserPageURLRouting)

export default UserPageContainer