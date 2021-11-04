import React from "react"
import ProfileHead from "./ProfileHead/ProfileHead";
import InfoBar from "./InfoBar/InfoBar";
import Content from "./Content/Content";
import {Redirect} from "react-router-dom";
import st from "./MainComponents.module.css"

const MainComponents = (props) => {
    //if (!props.isAuthorized) return <Redirect to='/login'/>
    return (
        <div className={st.appWrapper}>
            <Redirect to='/finder'/>
            <ProfileHead/>
            <InfoBar/>
            <Content/>
        </div>
    )
}

export default MainComponents