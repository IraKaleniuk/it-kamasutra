import React, {useEffect} from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {useNavigate} from "react-router-dom";

const Dialogs = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuth) return navigate("/login")
    }, []);

    let state = props.dialogsPage;

    let dialogsElements =
        state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements =
        state.messages.map(m => <Message key={m.id} message={m.message}/>)


    let onSendMessage = () => {
        props.addNewMessage();
    }

    let onSendMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessage(text);
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