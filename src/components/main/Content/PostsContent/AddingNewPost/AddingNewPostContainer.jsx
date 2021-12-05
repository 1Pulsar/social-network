import {
    publishNewPost
} from "../../../../../Redux/Reducer/PostsPageReducer";
import React from "react";
import AddingNewPost from "./AddingNewPost";
import {connect} from "react-redux";

const mapStateToProps = (state) =>({})


const AddingNewPostContainer = connect(mapStateToProps, {publishNewPost})(AddingNewPost)

export default AddingNewPostContainer