import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserData} from "../../redux/authReducer";
import {toggleIsFetching} from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";

const HeaderContainer = (props) => {

    useEffect(() => {
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                props.toggleIsFetching(false)
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    props.setUserData(id, email, login)
                }
            })
    })

    return <>
        {props.isFetching ? <Preloader/> : null}
        <Header {...props}/>
        </>
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
}

export default connect(mapStateToProps, {setUserData, toggleIsFetching})(HeaderContainer)