import React from "react";
import styles from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                New posts
            </div>
            <div>
                <textarea>Some text</textarea>
            </div>
            <div><button>Add post</button></div>
            <div className={styles.posts}>
                <Post message={"Hi! How are you?"} likesCount={"0"}/>
                <Post message={"it's my first post!)"} likesCount={"33"}/>
            </div>
        </div>
    )
}

export default MyPosts;