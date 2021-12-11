import React from "react";
import st from './Information.module.css';

const AboutMe = (props) => {
    return <div>
        <h2>~ About me ~</h2>
        <p className={st.longTextField}>{props.aboutMe ? props.aboutMe : 'No information'}</p>
    </div>
}

export default AboutMe