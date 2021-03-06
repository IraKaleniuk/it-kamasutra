import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import {Button} from "antd";

const TopBar = (props) => {
    return (
        <Header className="header">
            <img className={styles.logo}
                 src={"data:image/png;base64,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"}
                 alt={props.login}/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <NavLink to={'/login'}><Button onClick={props.logout}>Log out</Button></NavLink>
                    : <NavLink to={'/login'}>Log in</NavLink>}
            </div>
        </Header>
    )
}

export default TopBar;