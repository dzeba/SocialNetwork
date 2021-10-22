import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(dialog =>
            <DialogItem name={dialog.name} id={dialog.id}/>
        )

    let messageElements = props.state.messages
        .map(message =>
            <Message message={message.message}/>
        )
    let newMessageElement = React.createRef();
    let sendMessage = () =>{
        props.addMessage()
    }
    let updateMessage =() =>{
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)

    }
    /*let dialogsSecond = props.state.dialogs
        .map(dialog => {
            if(dialog.id % 2 === 0)
                return <DialogItem name={dialog.name} id={dialog.id}/>
            return <div> </div>
            }
        )*/
    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messageElements}
                <textarea onChange={updateMessage}
                          ref={newMessageElement}
                          value={props.state.newMessageText}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs;