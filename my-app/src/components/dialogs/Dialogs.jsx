import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;