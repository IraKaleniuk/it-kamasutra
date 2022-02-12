import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import Preloader from "../common/preloader/Preloader";

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthUserData()
    }, [])

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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)