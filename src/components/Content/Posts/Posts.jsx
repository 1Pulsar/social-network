import React from 'react'
import st from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={st.posts}>
            <Post postDescription='sdfsdfdsfdsf dfsdfsdfsdd dsfsdfsdfsddf dsf sdfsdf sdf ddfdsfsdfd sdfsdfsdfds dsfsdfsdf sdfsdfsdf s
                    sdfsdfdsdf dsfdfsdf sdfsdfsdf dsfsdfsddf' heading='Time management' imageLink='http://www.touro.edu/media/touro-college/communications/images/featured/2020/timemanagement.jpg' />
            <Post heading='Programming' imageLink='https://xakep.ru/wp-content/uploads/2015/05/func1.jpg' postDescription='Я начал программировать еще в детстве, и годам к двадцати пяти мне казалось, что я все знаю и понимаю. Объектно ориентированное программирование стало частью моего мозга, все мыслимые книги о промышленном программировании были прочитаны.' />
            <Post heading='Music in our Live' imageLink='https://image.freepik.com/free-vector/neon-background-with-music-word_23-2147634776.jpg' />
        </div>
    )
}

export default Posts