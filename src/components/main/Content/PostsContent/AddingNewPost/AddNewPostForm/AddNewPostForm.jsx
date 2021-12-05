import React from "react";
import st from "./AddNewPostForm.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../../common/defaultForms/defaultForms";
import {isWritten, maxLengthValidCreator} from "../../../../../validators/reduxFormValidators";

const maxLength20 = (content) => maxLengthValidCreator(20)(content)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='postTitle' component={Textarea} placeholder='Enter the title of your post'
                   className={st.imgAndHeadChanges} validate={[isWritten, maxLength20]}/>
            <Field name='postImage' component={Textarea} placeholder='Enter the URL of your posts image'
                   className={st.imgAndHeadChanges} validate={[isWritten, maxLength20]}/>
            <Field name='postContent' component={Textarea} placeholder='Enter the content of your post'
                   className={st.contentChanges} validate={[isWritten, maxLength20]}/>
            <button className={st.addPostButton}>
                <div>Add a post</div>
                <img src={'https://cdn-icons-png.flaticon.com/512/50/50621.png'}/>
            </button>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm({form: 'addNewPostForm'})(AddNewPostForm)