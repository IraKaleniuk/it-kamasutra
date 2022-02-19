import React, {useState} from "react";
import styles from './MyPosts.module.css';
import {Comment, List, Form, Button, Input } from "antd";
import Avatar from "antd/es/avatar/avatar";

const {TextArea} = Input

const Editor = ({ onChange, onSubmit, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" onClick={onSubmit} type="primary">
                Add New Post
            </Button>
        </Form.Item>
    </>
);

const MyPosts = (props) => {
    const [newPostText, setNewPostText] = useState('')
    const data = []

    props.posts.forEach(
        post => {
            let postItem = {
                author: "Author",
                avatar: "https://avatarfiles.alphacoders.com/122/thumb-122644.jpg",
                content: post.message
            }
            data.push(postItem)
        }
    )

    let onAddPost = () => {
        props.addPost(newPostText);
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        setNewPostText(text)
    };

    return (
        <div className={styles.postsBlock}>
            <Comment
                avatar={<Avatar src="https://avatarfiles.alphacoders.com/122/thumb-122644.jpg" alt="Han Solo" />}
                content={
                    <Editor
                        onChange={onPostChange}
                        onSubmit={onAddPost}
                        value={newPostText}
                    />
                }
            />

            <List
                className="comment-list"
                header="My posts"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <li>
                        <Comment
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                        />
                    </li>
                )}
            />
        </div>
    )
};

export default MyPosts;