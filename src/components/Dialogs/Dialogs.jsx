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
    let dialogsData = [
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
    let messageData = [
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[2].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
            </div>
        </div>
    )
}
export default Dialogs;