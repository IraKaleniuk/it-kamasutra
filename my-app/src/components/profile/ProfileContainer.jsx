import React, {useEffect} from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReduser";
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {

    let urlParams = useParams()

        useEffect(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${urlParams.userId}`)
                .then(response => {
                    props.setUserProfile(response.data)
                })
        })
        return (
            <Profile {...props} profile={props.profile}/>
        )
}

const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile
    })
}
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);