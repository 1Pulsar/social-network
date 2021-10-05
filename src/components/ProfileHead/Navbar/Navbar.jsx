import React from 'react'
import st from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <div className={st.item}><a>Overview</a></div>
            <div className={st.item}><a>Messages</a></div>
            <div className={st.item}><a>Media</a></div>
            <div className={st.item}><a>Posts</a></div>
            <div className={st.item}><a>Settings</a></div>

        </nav>
    )
}

export default Navbar