import React from 'react'
import st from './Posts.module.css'
import Post from "./Post/Post";
import {NavLink} from "react-router-dom";

const Posts = (props) => {
    const postsMapped = props.postsPage.postsData.map(p => <Post heading={p.heading} previewImage={p.previewImage} postContent={p.postContent.substring(0, 200) + '...'} id={p.id}/>)
    return (
        <div className={st.posts}>
            <NavLink className={st.addPostButton} to={`/posts/addingPost`}><div>Add a post</div><img src={'https://cdn-icons-png.flaticon.com/512/50/50621.png'} /></NavLink>
            <div className={st.postsList}>{postsMapped}</div>
        </div>
    )
}

export default Posts