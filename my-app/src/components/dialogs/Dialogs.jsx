import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to="1">User1</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/2">User2</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/3">User3</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/4">User4</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    Hi
                </div>
                <div className={styles.message}>
                    How is your it-kamasutra?
                </div>
                <div className={styles.message}>
                    Smth
                </div>
            </div>
        </div>
    )
}

export default Dialogs;