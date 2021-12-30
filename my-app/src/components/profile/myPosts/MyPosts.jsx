import React from "react";
import styles from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post!", likesCount: 10},
        {id: 2, message: "It's my first post!", likesCount: 10},
        {id: 2, message: "It's my first post!", likesCount: 10},
        {id: 2, message: "It's my first post!", likesCount: 10}
    ]

    let postsElements = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                New posts
            </div>
            <div>
                <textarea>Some text</textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;