import postsPageReducer, {deletePost, publishNewPost} from "./PostsPageReducer";

let state = {
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

it('New post should be added', () => {
    let newState = postsPageReducer(state, publishNewPost({
        id: state.postsData.length,
        postTitle: 'Hello, world',
        postImage: 'Some address',
        postContent: 'Lorem ipsum dolor em'
    }))

    expect(newState.postsData.length).toBe(4)
})

it('New post data is right', () => {
    let newState = postsPageReducer(state, publishNewPost({
        id: state.postsData.length,
        postTitle: 'Hello, world',
        postImage: 'Some address',
        postContent: 'Lorem ipsum dolor em'
    }))

    expect(newState.postsData[3].heading).toBe('Hello, world')
    expect(newState.postsData[3].previewImage).toBe('Some address')
    expect(newState.postsData[3].postContent).toBe('Lorem ipsum dolor em')
})

it('Third post is deleted correctly', () => {
    let newState = postsPageReducer(state, deletePost(3))

    expect(newState.postsData.length).toBe(2)
})