import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE ='SET_USER_PROFILE'

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi how are you',
        },
        {
            id: 2,
            message: 'Its my first post'
        }
    ],
    newPostText: 'some text',
    profile: null
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 1, message: state.newPostText}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ // це
    type: ADD_POST
})

export const updateNewPostActionCreator = (text) =>{ // і це то одно і то же просто переше то коротший варіант
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile) => ({ // це
    type: SET_USER_PROFILE,
    profile
})

export const getUserProfile = (userId)=>{
    return (dispatch) =>{
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}


export default profileReducer;