import React from 'react'
import st from './Avatar.module.css'
import defaultUserAvatar from '../../../../../images/defaultUserAvatar.png'
import plusIcon from '../../../../../images/plusIcon.png'

const Avatar = (props) => {
    const onAvatarSelected = (e) => {
        props.submitNewAvatarThunk(e.target.files[0])
    }
    return (
        <div className={st.avatarBlock}>
            <div className={st.addAvatarIconBox}>
                <input className={st.setAvatarButton} type="file" id="setAvatarFile" onChange={onAvatarSelected}/>
                <label htmlFor="setAvatarFile"><img src={plusIcon} alt='Add avatar Icon' className={st.addAvatarIcon}/></label>
            </div>
            <img className={st.ava}
                 src={props.avatar ? props.avatar : defaultUserAvatar}/>
        </div>
    )
}

export default Avatar