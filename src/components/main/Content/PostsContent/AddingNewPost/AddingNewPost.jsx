import React from 'react'
import st from './AddNewPostForm/AddNewPostForm.module.css'
import {AddNewPostReduxForm} from "./AddNewPostForm/AddNewPostForm";

const AddingNewPost = (props) => {
    const submitNewPost = (newPostData) => {
        props.publishNewPost(newPostData)
    }

    return (
        <div className={st.addingPostPage}>
        <AddNewPostReduxForm onSubmit={submitNewPost} />
        </div>
    )
}

export default AddingNewPost