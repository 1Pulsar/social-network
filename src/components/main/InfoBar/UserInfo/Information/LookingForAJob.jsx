import React from "react";
import st from './Information.module.css';

const LookingForAJob = (props) => {
    return <div>
        {!props.lookingForAJob ? <p>I`m not looking for a job now</p> :
            <div>
                <p>Hello, I`m looking for a job!</p>
                <h2>~My descriptions~</h2>
                <p className={st.longTextField}>{props.lookingForAJobDescription}</p>
            </div>}
    </div>
}

export default LookingForAJob