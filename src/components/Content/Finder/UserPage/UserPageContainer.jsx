import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserPage, toggleFetching} from "../../../../Redux/Reducer/UserPageReducer";
import UserPage from "./UserPage";
import {Route, withRouter} from "react-router-dom";

class UserPageAPI extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(responce => {
                this.props.setUserPage(responce)
                this.props.toggleFetching(false)
            })
    }

    render() {
        return <Route path={`/user/${this.props.id}`} render={() => <UserPage pageInformation={this.pageInformation}
                                                                              isFetching={this.isFetching}/>}/>
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