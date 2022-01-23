import preloader from "../../../assets/images/preloader.svg";
import styles from "../../users/Users.module.css";
import React from "react";

const Preloader = (props) => {
    return (
        <img src={preloader}
             className={styles.preloader}/>
    )
}

export default Preloader