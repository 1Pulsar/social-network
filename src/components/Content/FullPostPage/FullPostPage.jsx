import React from 'react'
import st from './FullPostPage.module.css'

const FullPostPage = (props) => {
    const headStyle = {backgroundImage: `url(${props.postData.previewImage})`}
    return (
        <div className={st.postPage}>
            <div className={st.heading} style={headStyle}>
                <div className={st.text}>{props.postData.heading}</div>
            </div>
            <div className={st.content}><p>{props.postData.postContent}</p></div>
            <div className={st.footer}></div>
        </div>
    )
}

export default FullPostPage