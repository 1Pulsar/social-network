import React from 'react'
import st from './ProfileHead.module.css'
import UserInfo from "./UserInfo/UserInfo";
import Navbar from "./Navbar/Navbar";

const ProfileHead = () => {
    return (
        <div className = {st.profileHead}>
            <UserInfo />
            <Navbar />
        </div>
    )
}

export default ProfileHead