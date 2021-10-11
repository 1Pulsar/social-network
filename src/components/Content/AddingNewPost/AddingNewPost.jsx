import React from 'react'
import st from './AddingNewPost.module.css'
import {
    onContentTextareaPostCreator,
    onHeaderTextareaPostCreator,
    onImageTextareaPostCreator,
    publishPostCreator
} from "../../../React/Reducer/PostsPageReducer";

const AddingNewPost = (props) => {

    let addPostClick = () => publishPostCreator()
    let headerChanges = (event) => onHeaderTextareaPostCreator(event.target.value)
    let imgUrlChanges = (event) => onImageTextareaPostCreator(event.target.value)
    let contentChanges = (event) => onContentTextareaPostCreator(event.target.value)

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