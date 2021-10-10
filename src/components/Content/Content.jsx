import React from 'react'
import st from './Content.module.css'
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";
import Media from "./Media/Media";
import Messages from "./Messages/Messages";
import Overview from "./Overview/Overview";
import Posts from "./Posts/Posts";
import FullPostPage from "./FullPostPage/FullPostPage";
import AddingNewPost from "./AddingNewPost/AddingNewPost";

const Content = (props) => {
    let postsMapped = props.data.postsPage.postsData
        .map( p => <Route path={`/posts/${p.id}`} render ={ () => <FullPostPage postData={p} />} />)
    return (
        <div className={st.content}>
            <Route path='/media' render={() => <Media/>}/>
            <Route path='/messages' render={() => <Messages dispatch = {props.dispatch} messagesPage = {props.data.messagesPage}/>}/>
            <Route path='/overview' render={() => <Overview/>}/>
            <Route exact path='/posts' render={() => <Posts postsPage={props.data.postsPage}/>}/>
            <Route path='/posts/addingPost' render={() => <AddingNewPost headerText={props.data.postsPage.textareaPostHeader}
                                                                         imageText={props.data.postsPage.textareaPostImage}
                                                                         contentText={props.data.postsPage.textareaPostText} />} />
            {postsMapped}
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    )
}

export default Content