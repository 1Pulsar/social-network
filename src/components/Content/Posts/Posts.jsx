import React from 'react'
import st from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={st.posts}>
            <Post />
        </div>
    )
}

export default Posts