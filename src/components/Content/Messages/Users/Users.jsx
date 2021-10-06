import React from 'react'
import st from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = () => {

    const usersData = [
        {id: 1, name: 'Jienya'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Dimon'},
        {id: 4, name: 'Victor'},
    ]

    const usersMapping = usersData.map(u => {
        return <NavLink className={st.user} activeClassName={st.active} to={`/messages/${u.id}`}>{u.name}</NavLink>
    })
    return (
        <div className={st.content}>
            {usersMapping}
        </div>
    )
}

export default Users