import React from "react";
import styles from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <div>
                <textarea>Some text</textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;