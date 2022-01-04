import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>)


    let sendMessage = () => {
        props.dispatch(addNewMessageCreator());
    }

    let onSendMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageCreator(text));
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea onChange={onSendMessageChange}
                          value={props.state.newMessageText}
                          placeholder={'Enter your message'}/>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;