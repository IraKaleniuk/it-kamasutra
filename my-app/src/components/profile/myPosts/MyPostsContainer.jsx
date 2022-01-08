import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state=props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text));
    };

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={onAddPost}
                 posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}/>
    )
};

export default MyPostsContainer;