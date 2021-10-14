import {
    onContentTextareaPostCreator,
    onHeaderTextareaPostCreator,
    onImageTextareaPostCreator,
    publishPostCreator
} from "../../../../Redux/Reducer/PostsPageReducer";
import React from "react";
import AddingNewPost from "./AddingNewPost";
import {connect} from "react-redux";

const mapStateToProps = (state) =>({
    headerText: state.postsPage.textareaPostHeader,
    imageText: state.postsPage.textareaPostImage,
    contentText: state.postsPage.textareaPostText
})

const mapDispatchToProps = (dispatch) =>({
    addPostClickContainer:()=>dispatch(publishPostCreator()),
    headerChangesContainer:(text) => dispatch(onHeaderTextareaPostCreator(text)),
    imgUrlChangesContainer:(text) => dispatch(onImageTextareaPostCreator(text)),
    contentChangesContainer:(text) => dispatch(onContentTextareaPostCreator(text))
})

const AddingNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddingNewPost)

export default AddingNewPostContainer