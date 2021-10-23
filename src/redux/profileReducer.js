
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) =>{
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    /*if(action.type === ADD_POST){
        let newPost = {
            id: 1,
            message: state.newPostText
        }
        state.posts.push(newPost)
        state.newPostText = ''
    }
    else if( action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
    }
    return state;*/ //те саме що і вище
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