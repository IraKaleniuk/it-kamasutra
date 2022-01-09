import React from "react";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    /*let state = store.getState().messagesPage;*/

                    let onSendMessage = () => {
                        store.dispatch(addNewMessageCreator());
                    }

                    let onSendMessageChange = (text) => {
                        store.dispatch(updateNewMessageCreator(text));
                    }

                    return (
                        <Dialogs onSendMessage={onSendMessage}
                                 onSendMessageChange={onSendMessageChange}
                                 dialogsPage={store.getState().messagesPage}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;