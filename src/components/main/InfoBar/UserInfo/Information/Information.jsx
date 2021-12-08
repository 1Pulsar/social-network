import React from 'react'
import st from './Information.module.css'
import Status from "./Status/Status";
import infobarTilda from "../../../../../images/InfobarTilda.png"

const Information = (props) => {
    return (
        <div className={st.infoBlock}>
            <Status status={props.status} newStatusThunk={props.newStatusThunk} />
            <img className={st.tildaImage} src={infobarTilda} />
            <div>
                <p>~ About me ~</p>
                <p className={st.longTextField}>{props.aboutMe ? props.aboutMe : 'No information'}</p>
            </div>
            <img className={st.tildaImage} src={infobarTilda} />
            <div>
                {!props.lookingForAJob ? <p>I`m not looking for a job now</p> :
                    <div>
                        <p>Hello, I`m looking for a job!</p>
                        <p>~My descriptions~</p>
                        <p className={st.longTextField}>{props.lookingForAJobDescription}</p>
                    </div>}
            </div>
            <img className={st.tildaImage} src={infobarTilda} />
            <div>
                <p>~My contacts~</p>
            </div>
        </div>
    )
}

export default Information