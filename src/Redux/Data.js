/*import messagePageReducer from "./Reducer/MessagePageReducer";
import postsPageReducer from "./Reducer/PostsPageReducer";

    export
let store = {
    _data: {
        postsPage:
            {
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
                textareaPostText: '',
                textareaPostImage: '',
                textareaPostHeader:''
            },
        messagesPage: [
            {
                id: 1, status: 'online', name: 'Jienya12124', avatar: 'https://i.imgur.com/gqJvKwW.png',
                messagesData: [
                    {id: 1, abonent: 'in', text: 'Hello, my dear friend!'},
                    {id: 2, abonent: 'out', text: 'Hi!'},
                    {id: 3, abonent: 'in', text: 'How are you?'},
                    {id: 4, abonent: 'out', text: 'I\'m fine'},
                    {id: 5, abonent: 'in', text: 'Do you like learn JS Redux?'},
                    {id: 6, abonent: 'out', text: 'Yes, so much'},
                    {id: 7, abonent: 'in', text: 'Hey!'},
                    {id: 8, abonent: 'out', text: 'What?'},
                    {id: 9, abonent: 'in', text: 'Good bye, have a good day!'},
                ], textareaMassage: ''
            },
            {
                id: 2, status: 'offline', name: 'Ilya -_-', avatar: 'https://www.blast.hk/attachments/68493/',
                messagesData: [
                    {id: 1, abonent: 'in', text: 'He232'},
                    {id: 2, abonent: 'out', text: 'Hwewewewe!'},
                    {id: 3, abonent: 'in', text: 'How are yowwsdsdsu?'},
                    {id: 4, abonent: 'out', text: 'I\'m finswwdssdsde'},
                    {id: 5, abonent: 'in', text: 'Do you like learn wswsswcwscJS Redux?'},
                    {id: 6, abonent: 'out', text: 'Yes, so wscwscwscmuch'},
                    {id: 7, abonent: 'in', text: 'wsswcswscHey!'},
                    {id: 8, abonent: 'out', text: 'Whatcwssccccc?'},
                    {id: 9, abonent: 'in', text: 'Good bye, havesswwwscwscwsc a good day!'},
                ], textareaMassage: ''
            },
            {
                id: 3,
                status: 'offline',
                name: 'Dimon228',
                avatar: 'https://cs14.pikabu.ru/post_img/2021/05/08/12/16205042291362743.jpg',
                messagesData: [
                    {id: 1, abonent: 'in', text: 'Hello, my dear friend!'},
                    {id: 2, abonent: 'out', text: 'Hisdsdds!'},
                    {id: 3, abonent: 'in', text: 'How are you?'},
                    {id: 4, abonent: 'out', text: 'I\'m fine'},
                    {id: 5, abonent: 'in', text: 'Dodsdsdsd you like learn JS Redux?'},
                    {id: 6, abonent: 'out', text: 'Yes, so much'},
                    {id: 7, abonent: 'in', text: 'Hesdsdy!'},
                    {id: 8, abonent: 'out', text: 'What?'},
                    {id: 9, abonent: 'in', text: 'Goodccccc bye, have a good day!'},
                ],
                textareaMassage: ''
            },
            {
                id: 4,
                status: 'online',
                name: 'VictorGeek',
                avatar: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360515_youloveit_ru_dipper_gravity_falls_na_avu02.jpg',
                messagesData: [
                    {id: 1, abonent: 'in', text: 'sssdsdHello, my dear friend!'},
                    {id: 2, abonent: 'out', text: 'Hisasdasd!'},
                    {id: 3, abonent: 'in', text: 'How are you?'},
                    {id: 4, abonent: 'out', text: 'I\'m fccine'},
                    {id: 5, abonent: 'in', text: 'Do you like learn JS Redux?'},
                    {id: 6, abonent: 'out', text: 'Yes, so much'},
                    {id: 7, abonent: 'in', text: 'Heycscsc!'},
                ],
                textareaMassage: ''
            },
        ]
    },
    _goRender() {
        console.log('No have new renders')
    },
    getData() {
        return this._data
    },
    getRender(calledRender) {
        this._goRender = calledRender
    },
    dispatch(action) {
        this._data.messagesPage = messagePageReducer(action, this._data.messagesPage)
        this._data.postsPage = postsPageReducer(action, this._data.postsPage)
        this._goRender(this._data)
    }
}*/