import React from 'react'
import st from './Content.module.css'
import {Route} from "react-router-dom";
import SuspenseWrapper from "../../common/SuspenseWrapper";
import PostsContentContainer from "./PostsContent/PostsContentContainer";

const Media = React.lazy(() => import ('./Media/Media'))
const MessagesContainer = React.lazy(() => import ('./Messages/MessagesContainer'))
const Overview = React.lazy(() => import ('./Overview/Overview'))
const FinderContainer = React.lazy(() => import ('./Finder/FinderContainer'))
const Settings = React.lazy(() => import ('./Settings/Settings'))
const UserPageContainer = React.lazy(() => import('./UserPage/UserPageContainer'))

const Content = (props) => {
    return (
        <div className={st.content}>
            <Route path='/media' render={() => {
                return <div>{SuspenseWrapper(Media)}</div>
            }}/>
            <Route path='/messages' render={SuspenseWrapper(MessagesContainer)}/>
            <Route path='/overview' render={SuspenseWrapper(Overview)}/>
            <Route path='/finder' render={SuspenseWrapper(FinderContainer)}/>
            <PostsContentContainer/>
            <Route path='/settings' render={SuspenseWrapper(Settings)}/>
            <Route path='/user/:userId' render={SuspenseWrapper(UserPageContainer)}/>
        </div>
    )
}

export default Content