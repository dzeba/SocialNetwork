import React from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return{
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);