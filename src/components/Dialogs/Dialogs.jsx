import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";




const AddMessageForm = (props) =>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field className={s.addMessageInput} component={Textarea} name={'newMessageBody'}
                   placeholder={'Enter your message'}  />
            <button className={s.addMessageButton}>Send</button>

        </form>
    </div>
}

const AddMessageFormRedux = reduxForm ({form: 'dialogAddMessageForm'})(AddMessageForm)

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

    const onSubmit = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messageElements}
                <AddMessageFormRedux onSubmit ={onSubmit}
                />
            </div>
        </div>
    )
}
export default Dialogs;