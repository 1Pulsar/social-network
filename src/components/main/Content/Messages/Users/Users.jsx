import React from 'react'
import st from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    const usersMapping = props.usersData.map(u => {
        return <NavLink className={st.user} activeClassName={st.active} to={`/messages/${u.id}`}>
            <img src={u.avatar} className={st.avatar}/>{u.name}</NavLink>
    })
    return (
        <div className={st.content}>
            <div className={st.chatsHeading}>All chats</div>
            {usersMapping}
        </div>
    )
}

export default Users