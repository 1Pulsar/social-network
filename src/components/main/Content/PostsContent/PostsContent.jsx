import {Route} from "react-router-dom";
import Posts from "./Posts/Posts";
import React from "react";
import FullPostPage from "./FullPostPage/FullPostPage";
import AddingNewPostContainer from "./AddingNewPost/AddingNewPostContainer";

const PostsContent = (props) => {
    let postsMapped = props.postsPage.postsData
        .map(p => <Route path={`/posts/${p.id}`} render={() => <FullPostPage postData={p}/>}/>)
    return (
        <div>
            <Route exact path='/posts' render={() => <Posts postsPage={props.postsPage}/>}/>
            <Route path='/posts/addingPost'
                   render={() => <AddingNewPostContainer/>}/>
            {postsMapped}
        </div>
    )
}

export default PostsContent