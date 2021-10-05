import React from 'react'
import st from './Post.module.css'

const Post = (props) => {
    return (
        <div className={st.post}>
            <div className={st.preview} >
                <img src={props.imageLink} />
            </div>
            <div className={st.postContext}>
            <h1>{props.heading}</h1>
                <p>{props.postDescription}</p>
                <br />
                <button>Read more</button>
            </div>
        </div>
    )
}

export default Post