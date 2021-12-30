import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Ira'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Olia'},
        {id: 4, name: 'Roman'},
        {id: 5, name: 'Dima'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your IT?'},
        {id: 3, message: 'Have a nice evening'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages
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