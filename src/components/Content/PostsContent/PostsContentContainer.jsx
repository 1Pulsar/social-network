import React from "react";
import contentContext from "../../../ContentContext";
import PostsContent from "./PostsContent";

const PostsContentContainer = () => {
    return (
        <contentContext.Consumer>
            {(store) => <PostsContent postsPage={store.getState().postsPage}/>}
        </contentContext.Consumer>
    )
}

export default PostsContentContainer