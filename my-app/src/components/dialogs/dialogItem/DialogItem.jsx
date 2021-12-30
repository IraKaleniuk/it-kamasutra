import React from "react";
import styles from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img src="https://arcanashop.ru/avatar/00/31/26679737.jpeg" alt="photo"/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;