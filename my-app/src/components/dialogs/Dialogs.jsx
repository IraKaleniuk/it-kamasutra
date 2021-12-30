import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={props.id}>{props.name}</NavLink>
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
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem name="Ira" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Olia" id="3"/>
                <DialogItem name="Roman" id="4"/>
                <DialogItem name="Dima" id="5"/>
            </div>
            <div className={styles.messages}>
               <Message message="Hi"/>
               <Message message="How your IT?"/>
               <Message message="Have a nice evening"/>
            </div>
        </div>
    )
}

export default Dialogs;