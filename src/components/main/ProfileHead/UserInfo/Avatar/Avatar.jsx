import React from 'react'
import st from './Avatar.module.css'

const Avatar = (props) => {
    return (
            <div className={st.avatarBlock}>
                <img className={st.ava}
                     src={props.avatar ? props.avatar : 'https://cdn-icons-png.flaticon.com/512/219/219983.png'}/>
            </div>
    )
}

export default Avatar