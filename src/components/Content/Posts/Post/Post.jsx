import React from 'react'
import st from './Post.module.css'

const Post = () => {
    return (
        <div className={st.post}>
            <div className={st.preview} > </div>
            <div className={st.postContext}>
            <h1>Time managment</h1>
                <p>sdfsdfdsfdsf dfsdfsdfsdd dsfsdfsdfsddf dsf sdfsdf sdf ddfdsfsdfd sdfsdfsdfds dsfsdfsdf sdfsdfsdf s
                    sdfsdfdsdf dsfdfsdf sdfsdfsdf dsfsdfsddf</p>
                <br />
                <button>Read more</button>
            </div>
        </div>
    )
}

export default Post