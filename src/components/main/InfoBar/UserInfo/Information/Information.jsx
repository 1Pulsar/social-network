import React from 'react'
import st from './Information.module.css'
import Status from "./Status/Status";
import infobarTilda from "../../../../../images/InfobarTilda.png"
import AboutMe from './AboutMe';
import LookingForAJob from './LookingForAJob';
import Contacts from './Contacts';

const Information = (props) => {
    return (
        <div className={st.infoBlock}>
            <Status status={props.status} newStatusThunk={props.newStatusThunk} />
            <img className={st.tildaImage} src={infobarTilda} />
            <AboutMe aboutMe={props.aboutMe} />
            <img className={st.tildaImage} src={infobarTilda} />
            <LookingForAJob lookingForAJob={props.lookingForAJob}
                lookingForAJobDescription={props.lookingForAJobDescription} />
            <img className={st.tildaImage} src={infobarTilda} />
            <Contacts contacts={props.contacts} />
        </div>
    )
}

export default Information