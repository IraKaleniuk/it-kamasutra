import React from "react";
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    User1
                </div>
                <div className={styles.dialog}>
                    User2
                </div>
                <div className={styles.dialog}>
                    User3
                </div>
                <div className={styles.dialog}>
                    User4
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