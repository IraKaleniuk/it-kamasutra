import React from "react"
import {addNewMessage, toggleIsFetching, updateNewMessage} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return ({
        dialogsPage: state.messagesPage
    })
}

export default compose(
    connect(mapStateToProps,
        {addNewMessage, updateNewMessage, toggleIsFetching}),
    withAuthRedirect
)(Dialogs)
