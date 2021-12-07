import React from 'react'
import st from './Information.module.css'
import Status from "./Status";

const Information = (props) => {
    return (
        <div className={st.infoBlock}>
            <Status status={props.status} newStatusThunk={props.newStatusThunk}/>
            <p>~ About me ~</p>
        </div>
    )
}

export default Information