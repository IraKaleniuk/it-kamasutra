import React, {useEffect} from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../redux/profileReduser";
import {useParams} from "react-router-dom";
import Preloader from "../common/preloader/Preloader";

const ProfileContainer = (props) => {

    let urlParams = useParams()

    if (!urlParams.userId) {
        urlParams = {
            userId: '2'
        }
    }

    useEffect(() => {
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${urlParams.userId}`)
            .then(response => {
                props.setUserProfile(response.data)
                props.toggleIsFetching(false)
            })
    }, [])
    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Profile {...props} profile={props.profile}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    })
}
export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(ProfileContainer);