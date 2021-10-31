import React from 'react'
import st from './Information.module.css'
import Status from "./Status";

const Information = (props) => {
    return (
        <div className={st.infoBlock}>
            <h1>{props.login}</h1>
            <p>5 stars</p>
            <Status status={props.status} statusIsChanged={props.statusIsChanged}
                    statusEdit={props.statusEdit} statusEditMode={props.statusEditMode} />
        </div>
    )
}

export default Information