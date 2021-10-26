import React from 'react'
import st from './Information.module.css'

const Information = (props) => {
    return (
        <div className={st.infoBlock}>
            <h1>{props.login}</h1>
            <p>5 stars</p>
            <p>Front-End developer</p>
        </div>
    )
}

export default Information