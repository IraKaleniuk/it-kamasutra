import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getAuthUserData, login, logout} from "../../redux/authReducer";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {useNavigate} from "react-router-dom";
import {LoginForm} from "./LoginForm";

const LoginFormContainer = (props) => {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        rememberMe: undefined
    })

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    useEffect(() => {
        if (credentials.email !== "" && credentials.password !== "" && credentials.rememberMe !== undefined)
        {
            props.login(credentials.email, credentials.password, credentials.rememberMe)}
        else {
           // props.logout() what should be here?
        }
    }, [credentials])

    useEffect(() => {
       if (props.isAuth) {
           navigate(`/profile/${props.userId}`)
       }
        else {
           navigate(`/login`)

       }
    }, [props.isAuth])

    return <>
        {props.isFetching ? <Preloader/> : null}
        <LoginForm onFinish={setCredentials} onFinishFailed={onFinishFailed} />
        </>
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    })
}

export default compose(
    connect(mapStateToProps, {getAuthUserData, login, logout})
)(LoginFormContainer)