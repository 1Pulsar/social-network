import React from "react";
import { NavLink } from "react-router-dom";
import defaultUserAvatar from "../../../../../images/defaultUserAvatar.png"
import st from "./UserItem.module.css"

const UserItem = ({ u, followingInProcess, followingButtonThunk }) => {
    return <div key={u.id} className={st.userItem}>
        <div className={st.itemBlock}>
            <div className={st.userAvatarAndName}>
                <NavLink to={`/user/${u.id}`} style={{ textDecoration: "none" }}>
                    <img className={st.profileImg}
                        src={u.photos.small != null ? u.photos.small : defaultUserAvatar} />
                </NavLink>
                <div className={st.userInfo}>
                    <div>
                        <div>
                            <NavLink to={`/user/${u.id}`}
                                style={{ textDecoration: "none", color: "white" }}>{u.name}</NavLink>
                        </div>
                        <div className={st.location}>u.location.city, u.location.country</div>
                    </div>
                    <div className={st.status}>{u.status}</div>
                </div>
            </div>
            <button disabled={followingInProcess.some(id => id === u.id)}
                onClick={() => {
                    followingButtonThunk(u.followed, u.id)
                }}
                className={st.button}>{(u.followed) ? 'Unfollow' : 'Follow'}</button>
        </div>
    </div>
}

export default UserItem