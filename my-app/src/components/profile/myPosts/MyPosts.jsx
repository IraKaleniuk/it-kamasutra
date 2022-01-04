import React from "react";
import styles from './MyPosts.module.css';
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
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