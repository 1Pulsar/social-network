import React from 'react'
import st from './ProfileHead.module.css'
import Navbar from "./Navbar/Navbar";

const ProfileHead = () => {
    return (
        <div className={st.profileHead}>
            <Navbar />
        </div>
    )
}

export default ProfileHead