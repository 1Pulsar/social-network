import React from 'react'
import st from './UserInfo.module.css'
import Avatar from "./Avatar/Avatar";
import Information from "./Information/Information";
import {NavLink} from "react-router-dom";

const UserInfo = (props) => {
    return (<div className={st.infoBlock}>
            {props.isAuthorized ? <div className={st.authUserInfo}>
                    <Avatar avatar={props.avatar}/>
                    <Information status={props.status} login={props.login}
                                 newStatusThunk={props.newStatusThunk}
                    />
                <button className={st.logoutButton} onClick={props.logoutUserThunk}>LogOut</button>
                </div> :
                <NavLink to='/login' className={st.loginButton}>Log in</NavLink>
            }
        </div>
    )

}

export default UserInfo