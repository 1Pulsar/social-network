import React from 'react'
import st from './ProfileHead.module.css'
import Navbar from "./Navbar/Navbar";
import { UserInfoContainer } from "../InfoBar/UserInfo/UserInfoContainer";

const ProfileHead = () => {
    return (
        <div className={st.profileHead}>
            <Navbar />
        </div>
    )
}

export default ProfileHead