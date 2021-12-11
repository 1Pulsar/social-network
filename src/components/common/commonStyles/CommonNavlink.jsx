import React from "react";
import { NavLink } from "react-router-dom";
import st from "./CommonNavlink.module.css"

const CommonNavlink = (props) => {
    const sizeParams = {
        width: props.width,
        height: props.height
    }

    return <NavLink className={st.item} style={sizeParams} activeClassName={st.activeLink}
        to={props.to}>{props.innerLinkText}</NavLink>
}

export default CommonNavlink