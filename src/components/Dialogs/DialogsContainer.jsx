import React from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageBody: (text) =>
        {
            dispatch(updateMessageActionCreator(text))
        },
        sendMessage: () =>
        {
            dispatch(sendMessageActionCreator())
        }

    }
}
const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default dialogsContainer;