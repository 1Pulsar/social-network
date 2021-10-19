import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserPage, toggleFetching} from "../../../../Redux/Reducer/UserPageReducer";
import UserPage from "./UserPage";

const mapStateToProps = state => ({
    photos: state.userPage.pageInformation.photos,
    fullName: state.userPage.pageInformation.fullName,
    isFetching: state.userPage.isFetching
})

const dispatchObject = {setUserPage, toggleFetching}

const UserPageContainer = connect(mapStateToProps, dispatchObject)(UserPageAPI)

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
        return <UserPage pageInformation={this.pageInformation} isFetching={this.isFetching}/>
    }
}

export default UserPageContainer