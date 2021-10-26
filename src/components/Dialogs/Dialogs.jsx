import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.messagesPage
    let dialogsElements = state.dialogs
        .map(dialog =>
            <DialogItem name={dialog.name} id={dialog.id}/>
        )

    let messageElements = state.messages
        .map(message =>
            <Message message={message.message}/>
        )

    let newMessageElement = React.createRef();

    let onSendMessageClick = () =>{
        props.sendMessage();
    }

    let onNewMessageChange =() =>{
        let text = newMessageElement.current.value;
        props.updateNewMessageBody(text)

    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messageElements}
                <textarea onChange={onNewMessageChange}
                          ref={newMessageElement}
                          value={props.newMessageText}
                />
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs;