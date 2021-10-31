import React from "react";
import st from "./UserPage.module.css"
import Preloader from "../../../common/Preloader";

const UserPage = (props) => {
    return (
        <div className={st.mainContainer}>
            {props.isFetching ? <Preloader/> :
                <div>
                    <img src={props.photos.small ?
                        props.photos.small : 'https://cdn-icons-png.flaticon.com/512/219/219983.png'}
                         className={st.mainPhoto} />
                    <p>{props.fullName}</p>
                </div>}
        </div>
    )
}

export default UserPage