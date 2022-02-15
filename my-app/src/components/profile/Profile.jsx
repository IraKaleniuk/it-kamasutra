import React, {useEffect} from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {useNavigate} from "react-router-dom";

const Profile = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuth) return navigate("/login")
    }, [])

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;