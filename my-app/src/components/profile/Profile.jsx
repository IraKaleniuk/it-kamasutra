import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo {...props} profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;