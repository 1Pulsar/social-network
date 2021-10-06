import React from 'react'
import st from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/overview'>Overview</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/messages'>Messages</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/media'>Media</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/posts'>Posts</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/settings'>Settings</NavLink>
        </nav>
    )
}

export default Navbar