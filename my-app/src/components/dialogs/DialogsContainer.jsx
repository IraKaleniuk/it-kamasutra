import React from "react"
import {sendMessage, toggleIsFetching} from "../../redux/dialogsReducer"
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
        {sendMessage, toggleIsFetching}),
    withAuthRedirect
)(Dialogs)
