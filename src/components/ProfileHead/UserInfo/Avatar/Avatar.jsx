import React from 'react'
import st from './Avatar.module.css'

const Avatar = () => {
    return (
            <div className={st.avatarBlock}>
                <img className={st.ava}
                     src='https://static10.tgstat.ru/channels/_0/de/deeb9f0e7b43dc6d67f4628356c274d7.jpg'/>
            </div>
    )
}

export default Avatar