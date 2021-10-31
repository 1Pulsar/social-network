import React from 'react'
import st from './ProfileHead.module.css'
import Navbar from "./Navbar/Navbar";
import {UserInfoContainer} from "./UserInfo/UserInfoContainer";

const ProfileHead = () => {
    return (
        <div className = {st.profileHead}>
            <UserInfoContainer />
            <Navbar />
        </div>
    )
}

export default ProfileHead