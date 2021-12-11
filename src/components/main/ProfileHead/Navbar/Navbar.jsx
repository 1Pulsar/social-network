import React from 'react'
import st from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import logoutIcon from "../../../../images/logout-vector-icon.png"
import { connect } from 'react-redux';
import { logoutUserThunk } from "../../../../Redux/Reducer/AuthReducer"
import CommonNavlink from '../../../common/commonStyles/CommonNavlink';

const Navbar = ({ logoutUserThunk }) => {
    const navbarButtonsArray = ['Overview', 'Messages', 'Finder', 'Media', 'Posts', 'Settings']

    return (
        <nav className={st.nav}>
            {navbarButtonsArray.map(n => (
                <CommonNavlink to={'/' + n.toLowerCase()}
                    width='15%' height='100%' innerLinkText={n} />
            ))}
            <a className={st.item, st.logoutButton} onClick={logoutUserThunk}>
                Logout
                <img src={logoutIcon} className={st.logoutIcon} />
            </a>
        </nav>
    )
}



export default connect(undefined, { logoutUserThunk })(Navbar)