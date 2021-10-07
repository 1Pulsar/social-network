import React from 'react'
import st from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    const postsMapped = props.postsPage.postsData.map(p => <Post heading={p.heading} previewImage={p.previewImage} postContent={p.postContent} />)
    return (
        <div className={st.posts}>
        {postsMapped}
        </div>
    )
}

export default Posts