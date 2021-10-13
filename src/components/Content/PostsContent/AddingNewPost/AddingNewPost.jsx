import React from 'react'
import st from './AddingNewPost.module.css'
import {
    onContentTextareaPostCreator,
    onHeaderTextareaPostCreator,
    onImageTextareaPostCreator,
    publishPostCreator
} from "../../../../Redux/Reducer/PostsPageReducer";

const AddingNewPost = (props) => {

    let addPostClick = () => props.addPostClickContainer()
    let headerChanges = (event) => props.headerChangesContainer(event.target.value)
    let imgUrlChanges = (event) => props.imgUrlChangesContainer(event.target.value)
    let contentChanges = (event) => props.contentChangesContainer(event.target.value)

    return (
        <div className={st.addingPostPage}>
            <textarea onChange={headerChanges} value={props.headerText} placeholder='Enter the title of your post'
                      className={st.imgAndHeadChanges}></textarea>
            <textarea onChange={imgUrlChanges} value={props.imageText} placeholder='Enter the URL of your posts image'
                      className={st.imgAndHeadChanges}></textarea>
            <textarea onChange={contentChanges} value={props.contentText} placeholder='Enter the content of your post'
                      className={st.contentChanges}></textarea>
            <div className={st.addPostButton} onClick={addPostClick}>
                <div>Add a post</div>
                <img src={'https://cdn-icons-png.flaticon.com/512/50/50621.png'}/></div>
        </div>
    )
}

export default AddingNewPost