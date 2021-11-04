let initialState = {
    postsData: [
        {
            id: 1,
            heading: 'Time management',
            previewImage: 'http://www.touro.edu/media/touro-college/communications/images/featured/2020/timemanagement.jpg',
            postContent: 'Тайм менеджмент — это такое рациональное распределение часов в сутках, чтобы и все успеть, и спать полноценные 7-8 часов, и быть эффективным, и оставаться здоровым. Это навык, который стоит прокачивать постоянно.\n' +
                '\n' +
                'Понимание того, что такое тайм-менеджмент и каковы его принципы, позволяет не только достигать целей с минимальными усилиями и в нужные сроки. Но также держать в балансе различные сферы жизни, не жертвуя ни отдыхом, ни общением с родными, ни заботой о собственном здоровье. То есть, тайм-менеджмент — это также о work-life balance. К этому призывают некоторые «гуру» продуктивности, которые на самом деле не понимают основной задачи тайм-менеджмента. Если вы уже тестировали подобную систему управления временем, то знаете, к чему это приводит — к раздражению, повышению тревожности, ухудшению психологического состояния. На самом деле, тайм-менеджмент — это не про универсальность. Да, есть определенные принципы, правила. Однако их нужно адаптировать под свой стиль и ритм жизни, приоритеты, личные качества, сильные и слабые стороны. А для этого — протестировать несколько техник.'
        },
        {
            id: 2,
            heading: 'Programming',
            previewImage: 'https://xakep.ru/wp-content/uploads/2015/05/func1.jpg',
            postContent: 'Я начал программировать еще в детстве, и годам к двадцати пяти мне казалось, что я все знаю и понимаю. Объектно ориентированное программирование стало частью моего мозга, все мыслимые книги о промышленном программировании были прочитаны.'
        },
        {
            id: 3,
            heading: 'Music in our Live',
            previewImage: 'https://image.freepik.com/free-vector/neon-background-with-music-word_23-2147634776.jpg',
            postContent: ''
        }
    ],
}

const postsPageReducer = (postsPage = initialState, action) => {
    switch (action.type) {
        case 'PUBLISH-POST':
            const newPost = {
                id: (postsPage.postsData.length + 1),
                heading: action.newPostData.postTitle,
                previewImage: action.newPostData.postImage,
                postContent: action.newPostData.postContent
            }
            return {...postsPage, postsData: [...postsPage.postsData, newPost]}

        default:
            return postsPage
    }
}

export const publishNewPost = (newPostData) => ({type: 'PUBLISH-POST', newPostData})

export default postsPageReducer