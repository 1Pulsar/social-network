import React from 'react'
import st from './InfoBar.module.css'
import { UserInfoContainer } from './UserInfo/UserInfoContainer'


const InfoBar = () => {
    return (
        <div className={st.infoBar}>
            <UserInfoContainer />
        </div>
    )
}

export default InfoBar