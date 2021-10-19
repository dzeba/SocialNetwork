import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.ative}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
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
    ]
    let messages = [
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

    let dialogsElements = dialogs
        .map(dialog =>
            <DialogItem name={dialog.name} id={dialog.id}/>
        )

    let messageElements = messages
        .map(message =>
            <Message message={message.message}/>
        )
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;