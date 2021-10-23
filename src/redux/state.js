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
    addPost() {
        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage(){
        let newMessage ={
            id: 1,
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messages.push(newMessage)
        this._state.messagesPage.newMessageText = ''
        this._callSubscriber(this._state);
    },
    updateNewMessageText(text){
        this._state.messagesPage.newMessageText = text;
        this._callSubscriber(this._state);
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newMessage ={
                id: 1,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber(this._state);
        }
        else if( action.type ==='UPADTE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}



window.store = store;

export default store;
