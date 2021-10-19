import React from "react";
import st from "./UserPage.module.css"

const UserPage = (props) => {
    return (
        <div className={st.mainContainer}>
            <div>
            <img src={props.photos.small}/>
                <p>{props.fullName}</p>
            </div>
        </div>
    )
}

export default UserPage