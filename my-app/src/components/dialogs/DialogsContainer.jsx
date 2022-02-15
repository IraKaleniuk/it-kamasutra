import React from "react"
import {addNewMessage, toggleIsFetching, updateNewMessage} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return ({
        dialogsPage: state.messagesPage,
        isAuth: state.auth.isAuth
    })
}


export default connect(mapStateToProps,
    {addNewMessage, updateNewMessage, toggleIsFetching})(Dialogs);
