import React from "react";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let onSendMessage = () => {
        props.store.dispatch(addNewMessageCreator());
    }

    let onSendMessageChange = (text) => {
        props.store.dispatch(updateNewMessageCreator(text));
    }


    return (
        <Dialogs onSendMessage={onSendMessage}
                 onSendMessageChange={onSendMessageChange}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;