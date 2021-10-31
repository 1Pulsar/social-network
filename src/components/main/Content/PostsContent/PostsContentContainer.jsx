import React from "react";
import PostsContent from "./PostsContent";
import {connect} from "react-redux";

let mapStateToProps = (state) =>({
    postsPage: state.postsPage
})

let mapDispatchToProps =(dispatch) => ({})

const PostsContentContainer = connect(mapStateToProps, mapDispatchToProps)(PostsContent)

export default PostsContentContainer