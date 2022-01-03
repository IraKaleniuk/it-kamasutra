import React from "react";
import styles from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let textMessage = newPostElement.current.value;
        props.addPost(textMessage);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                New posts
            </div>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}
                          ref={newPostElement}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;