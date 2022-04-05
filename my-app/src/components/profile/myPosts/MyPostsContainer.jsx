import React from "react";
import {addPost, setLikesCount} from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return (
        {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
        }
    )
};


const MyPostsContainer = connect(mapStateToProps, {addPost, setLikesCount})(MyPosts);

export default MyPostsContainer;