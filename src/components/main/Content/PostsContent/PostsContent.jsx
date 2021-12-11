import {Route} from "react-router-dom";
import React from "react";
import AddingNewPostContainer from "./AddingNewPost/AddingNewPostContainer";
import SuspenseWrapper from "../../../common/SuspenseWrapper";

const Posts = React.lazy(() => import ('./Posts/Posts'))
const FullPostPage = React.lazy(() => import ('./FullPostPage/FullPostPage'))

const PostsContent = (props) => {
    let postsMapped = props.postsPage.postsData
        .map(p => <Route key={p.id} path={`/posts/${p.id}`} render={SuspenseWrapper(() => <FullPostPage postData={p}/>)}/>)
    return (
        <div>
            <Route exact path='/posts' render={SuspenseWrapper(() => <Posts postsPage={props.postsPage}/>)}/>
            <Route path='/posts/addingPost'
                   render={() => <AddingNewPostContainer/>}/>
            {postsMapped}
        </div>
    )
}

export default PostsContent