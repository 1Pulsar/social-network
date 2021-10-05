import React from 'react'
import st from './UserInfo.module.css'
import Avatar from "./Avatar/Avatar";
import Information from "./Information/Information";

const UserInfo = () => {
    return (
            <div className={st.infoBlock}>
                <Avatar />
                <Information />
            </div>
    )
}

export default UserInfo