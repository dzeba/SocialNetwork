const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
    ]
}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 9, message: action.newMessageBody}],
            }

        default:
            return state;
    }
}
export const sendMessageActionCreator = (newMessageBody) => ({ //коротший
    type: ADD_MESSAGE,
    newMessageBody
})

export default dialogsReducer;