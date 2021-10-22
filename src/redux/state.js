
let rerenderEntireTree = () =>{
    console.log('sdfsd')
}

let state = {
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
}
window.state = state;

export let addPost = () => {
    let newPost = {
        id: 1,
        message: state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}


export let addMessage = () =>{
    let newMessage ={
        id: 1,
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree(state);
}

export let updateNewMessageText = (text) =>{
    state.messagesPage.newMessageText = text;
    rerenderEntireTree(state);
}
export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
}





export default state;
