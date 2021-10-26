import React from "react";
import {connect} from "react-redux";
import {setUserPage, toggleFetching} from "../../../Redux/Reducer/UserPageReducer";
import UserPage from "./UserPage";
import {withRouter} from "react-router-dom";
import {samuraiAPI} from "../../../api/api";

class UserPageAPI extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.toggleFetching(true)
        samuraiAPI.getProfile(userId).then(data => {
                this.props.setUserPage(data)
                this.props.toggleFetching(false)
            })
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

const dispatchObject = {setUserPage, toggleFetching}

const UserPageURLRouting = withRouter(UserPageAPI)

const UserPageContainer = connect(mapStateToProps, dispatchObject)(UserPageURLRouting)

export default UserPageContainer