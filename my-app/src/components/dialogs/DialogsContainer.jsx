import React from "react";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return(
        {
            dialogsPage: state.messagesPage
        }
    )
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            onSendMessage: () => {
                dispatch(addNewMessageCreator());
            },
            onSendMessageChange: (text) => {
                dispatch(updateNewMessageCreator(text));
            }
        }
    )
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;