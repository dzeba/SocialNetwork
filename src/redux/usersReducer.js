const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            photoUrl:'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg',
            followed: true,
            fullName: 'Vasyl Dzeba',
            status: 'I am a boss',
            location:{
                city: 'Ivano-Frankivsk',
                country: 'Ukraine'
            }
        },
        {
            id: 2,
            photoUrl:'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg',
            followed: false,
            fullName: 'Vova Yakimechko',
            status: 'Somebody',
            location:{
                city: 'Ternopil',
                country: 'Ukraine'
            }
        },
        {
            id: 3,
            photoUrl:'https://the-steppe.com/pictures/files/Alua%20Shymkent/WhatsApp%20Image%202019-09-06%20at%2010.37.49.jpeg',
            followed: true,
            fullName: 'Vitaly Chorniy',
            status: 'Make more money',
            location:{
                city: 'Rom',
                country: 'Italy'
            }
        },
        {
            id: 4,
            photoUrl:'https://cdnimg.rg.ru/img/content/132/44/35/vliianie_kofe_d_850.jpg',
            followed: false,
            fullName: 'Yana Fedorak',
            status: 'My Girl',
            location:{
                city: 'Yasen',
                country: 'Ukraine'
            }
        },
    ],
}

const usersReducer = (state = initialState, action) =>{
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users ]
            }

        default:
            return state;
    }

}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollowAC = (userId) =>{
    return{
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) =>{
    return{
        type: SET_USERS,
        users
    }
}

export default usersReducer;