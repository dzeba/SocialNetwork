import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage:
            {
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
            },
        messagesPage:
            {
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
            },
        friendPage:
            {
                friends: [
                    {
                        id: 1,
                        link: 'yo'
                    },
                    {
                        id: 2,
                        link: 'yo'
                    },
                    {
                        id: 3,
                        link: 'yo'
                    },
                    {
                        id: 4,
                        link: 'yo'
                    },
                ],
            }
    },
    getState(){
      return this._state
    },
    _callSubscriber(){
        console.log('sdfsd')
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    }
}
window.store = store;

export default store;
