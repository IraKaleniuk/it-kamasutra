import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let onAddPost = () => {
                        store.dispatch(addPostCreator());
                    };

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextCreator(text));
                    };

                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={onAddPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )

};

export default MyPostsContainer;