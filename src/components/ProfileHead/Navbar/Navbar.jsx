import React from 'react'
import st from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <a className={st.item} href='/overview'>Overview</a>
            <a className={st.item} href='/messages'>Messages</a>
            <a className={st.item} href='/media'>Media</a>
            <a className={st.item} href='/posts'>Posts</a>
            <a className={st.item} href='/settings'>Settings</a>

        </nav>
    )
}

export default Navbar