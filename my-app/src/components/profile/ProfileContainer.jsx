import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import Preloader from "../common/preloader/Preloader";
import {getProfile} from "../../redux/profileReduser";

const ProfileContainer = (props) => {

    let urlParams = useParams()

    if (!urlParams.userId) {
        urlParams = {
            userId: '2'
        }
    }

    useEffect(() => {
        props.getProfile(urlParams.userId)
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
export default connect(mapStateToProps, {getProfile})(ProfileContainer);