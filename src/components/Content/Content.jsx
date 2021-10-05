import React from 'react'
import st from './Content.module.css'
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div className={st.content}>
            <Posts />
        </div>
    )
}

export default Content