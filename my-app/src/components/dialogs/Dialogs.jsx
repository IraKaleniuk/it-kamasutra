import React, {useState} from "react";
import styles from './Dialogs.module.css';
import 'antd/dist/antd.css';
import {Comment, Form, Button, List, Input} from 'antd';
import moment from "moment";

const {TextArea} = Input
const Editor = ({onChange, onSubmit, value}) => (
    <>
        <Form.Item>
            <TextArea rows={1} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" onClick={onSubmit} type="primary">
                Send
            </Button>
        </Form.Item>
    </>
)
const MessageList = ({data}) => (
    <List
        dataSource={data}
        itemLayout="horizontal"
        renderItem={item => (
            <li>
                <Comment
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                />
            </li>
        )
        }
    />
)

const Dialogs = (props) => {
    const [newMessageText, setNewMessageText] = useState('')
    const data = []
    let state = props.dialogsPage;


    state.messages.forEach(
        message => {
            let messageItem = {
                author: 'Author',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: message.message,
                datetime: moment().fromNow()
            }
            data.push(messageItem)
        }
    )

    // let dialogsElements =
    //     state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let onSendMessage = () => {
        props.sendMessage(newMessageText)
        setNewMessageText('')
    }

    let onSendMessageChange = (event) => {
        let text = event.target.value
        setNewMessageText(text)
    }

    return (
        <div className={styles.dialogs}>
            {/*<div className={styles.dialogItems}>*/}
            {/*    {dialogsElements}*/}
            {/*</div>*/}
            <div className={styles.messages}>
                {data.length > 0 && <MessageList data={data}/>}
                <Comment
                    content={
                        <Editor
                            onChange={onSendMessageChange}
                            onSubmit={onSendMessage}
                            value={newMessageText}
                        />
                    }
                />

            </div>
        </div>
    )
}

export default Dialogs;