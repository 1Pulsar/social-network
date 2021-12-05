import messagePageReducer, {onTextareaChangeActionCreator} from "./MessagePageReducer";

const state = [
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
        id: 2, status: 'offline', name: 'Ilya', avatar: 'https://www.blast.hk/attachments/68493/',
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

it('Messages text area is correctly changed', () => {
    const newState = messagePageReducer(state, onTextareaChangeActionCreator('Some changes', 1))

    expect(state[0].textareaMassage).toBe('Some changes')
})