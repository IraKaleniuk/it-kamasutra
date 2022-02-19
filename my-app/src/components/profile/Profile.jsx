import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {useParams} from "react-router-dom";

const Profile = (props) => {
    let urlParams = useParams()

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            {urlParams.userId === '22531' ? <MyPostsContainer/> : ''}
        </div>
    )
}

export default Profile;