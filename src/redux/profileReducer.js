
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
    newPostText: 'some text'
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

export default profileReducer;