import React from 'react'
import st from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import logoutIcon from "../../../../images/logout-vector-icon.png"
import { connect } from 'react-redux';
import {logoutUserThunk} from "../../../../Redux/Reducer/AuthReducer"

const Navbar = ({logoutUserThunk}) => {
    return (
        <nav className={st.nav}>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/overview'>Overview</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/messages'>Messages</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/finder'>Finder</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/media'>Media</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/posts'>Posts</NavLink>
            <NavLink className={st.item} activeClassName={st.activeLink} to='/settings'>Settings</NavLink>
            <a className={st.item, st.logoutButton} activeClassName={st.activeLink} onClick={logoutUserThunk}>
                Logout
                <img src={logoutIcon} className={st.logoutIcon}/>
            </a>
        </nav>
    )
}



export default connect(undefined, {logoutUserThunk})(Navbar)