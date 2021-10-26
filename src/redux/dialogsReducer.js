const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let  initialState ={
    dialogs: [
        {
            id: 1,
            name: 'Vasya'
        },
        {
            id: 2,
            name: 'Dimych'
        },
        {
            id: 3,
            name: 'Vova'
        },
        {
            id: 4,
            name: 'Kolya'
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you'
        },
        {
            id: 3,
            message: 'My frend'
        },
        {
            id: 4,
            message: 'yo'
        },
    ],
    newMessageText : 'some message'
}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type){
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 1, message: state.newMessageText}],
                newMessageText: '',
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}
export const sendMessageActionCreator = () => ({ //коротший
    type: ADD_MESSAGE
})

export const updateMessageActionCreator = (text) =>{ // довший
    return{
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
export default dialogsReducer;