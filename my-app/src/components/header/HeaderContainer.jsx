import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {me} from "../../redux/authReducer";
import Preloader from "../common/preloader/Preloader";

const HeaderContainer = (props) => {

    useEffect(() => {
        me()
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

export default connect(mapStateToProps, {me})(HeaderContainer)