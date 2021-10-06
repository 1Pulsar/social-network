import React from 'react'
import st from './Dialogs.module.css'

const Dialogs = () => {
    const MessagesData = [
        {id: 1, abonent: 'in', text: 'Hello, my dear friend!'},
        {id: 2, abonent: 'out', text: 'Hi!'},
        {id: 3, abonent: 'in', text: 'How are you?'},
        {id: 4, abonent: 'out', text: 'I\'m fine'},
        {id: 5, abonent: 'in', text: 'Do you like learn JS React?'},
        {id: 6, abonent: 'out', text: 'Yes, so much'},
        {id: 7, abonent: 'in', text: 'Hey!'},
        {id: 8, abonent: 'out', text: 'What?'},
        {id: 9, abonent: 'in', text: 'Good bye, have a good day!'},
    ]

    const MessagesMapping = MessagesData.map(
        m => <span className={`${st.message} ${(m.abonent === 'in') ? st.in : st.out}`}>{m.text}</span>)

    return (
        <div className={st.content}>
            {MessagesMapping}
        </div>
    )
}

export default Dialogs