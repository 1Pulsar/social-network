let initialState = [
    {id:1, nickname: 'Winston1241', status:'I am a Doctor', subscription: true, profileImg:'', location:{city:'Kharkiv', country:'Ukraine'}},
    {id:2, nickname: 'Diana3321', status:'Hello guys!', subscription: true, profileImg:'', location:{city:'Alma-Ata', country:'Kazakhstan'}},
    {id:3, nickname: 'Slavik002', status:'Sometimes I fill myself like a cockroach', subscription: false, profileImg:'', location:{city:'Izum', country:'Ukraine'}},
    {id:4, nickname: 'JohnyCrown', status:'', subscription: false, profileImg:'', location:{city:'Los-Angeles', country:'United States of America'}}
]

const finderPageReducer = (finderPage = initialState, action) => {
    switch (action.type){
        case 'FOLLOW':
            return
        case 'UNFOLLOW':
            return
        default:
            return finderPage
    }
}

export const followAC = (id) => {

}

export const unfollowAC = (id) => {

}

export default finderPageReducer