import React from 'react'
import st from './Post.module.css'
import {NavLink} from "react-router-dom";

const Post = (props) => {
    const prevImgStyle = {backgroundImage: `url(${props.previewImage})`}
    return (
        <div className={st.post}>
            <div style={prevImgStyle} className={st.preview} >
            </div>
            <div className={st.postContext}>
            <h1>{props.heading}</h1>
                <p>{props.postContent}</p>
                <br />
                <NavLink className={st.rMoreButton} to={`/posts/${props.id}`}><div>Read more</div><img src={'https://cdn-icons-png.flaticon.com/512/50/50621.png'} /></NavLink>
            </div>
        </div>
    )
}

export default Post