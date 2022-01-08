import React from "react";
import styles from './MyPosts.module.css';
import Post from "./post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReduser";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        props.dispatch(addPostCreator());
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextCreator(text));
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                New posts
            </div>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}/>
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