import React from "react";
import TopBar from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, login} from "../../redux/authReducer";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";

const HeaderContainer = (props) => {
    //
    // useEffect(() => {
    //     // props.getAuthUserData()
    // }, [props.isAuth])

    return <>
        {props.isFetching ? <Preloader/> : null}
        <TopBar {...props}/>
        </>
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
}

export default compose(
    connect(mapStateToProps, {getAuthUserData, login})
)(HeaderContainer)