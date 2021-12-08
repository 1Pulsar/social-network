import React from 'react'
import st from './UserInfo.module.css'
import Avatar from "./Avatar/Avatar";
import Information from "./Information/Information";

const UserInfo = (props) => {
    return (<div>
        {props.isAuthorized && <div className={st.authUserInfo}>
            <div className={st.mainInformation}>
                <h1 className={st.userName}>{props.login}</h1>
                <Avatar avatar={props.avatar} submitNewAvatarThunk={props.submitNewAvatarThunk} />
            </div>
            <Information status={props.status} login={props.login}
                newStatusThunk={props.newStatusThunk}
                aboutMe={props.aboutMe}
                contacts={props.contacts}
                lookingForAJob={props.lookingForAJob}
                lookingForAJobDescription={props.lookingForAJobDescription}
            />
        </div>
        }
    </div>
    )

}

export default UserInfo