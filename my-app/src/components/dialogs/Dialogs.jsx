import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    let state=props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message}/>)


    let onSendMessage = () => {
        props.onSendMessage();
    }

    let onSendMessageChange = (event) => {
        let text = event.target.value;
        props.onSendMessageChange(text);
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea onChange={onSendMessageChange}
                          value={state.newMessageText}
                          placeholder={'Enter your message'}/>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;