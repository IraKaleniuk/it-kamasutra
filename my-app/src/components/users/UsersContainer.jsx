import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowingInProgress, getUsers, follow, unfollow, setPageSize
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {Pagination} from "antd";

const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, [props.currentPage, props.pageSize])

    let onPageChange = (pageNumber, pageSize) => {
        props.setCurrentPage(pageNumber)
        props.setPageSize(pageSize)
    }

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Pagination onChange={onPageChange} current={props.currentPage} defaultCurrent={1} total={props.totalUsersCount} />
            <Users totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChange={onPageChange}
                   users={props.users}
                   unfollow={props.unfollow}
                   follow={props.follow}
                   followingInProgress={props.followingInProgress}
            />
            <Pagination onChange={onPageChange} current={props.currentPage} defaultCurrent={1} total={props.totalUsersCount} />
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    })
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers, setPageSize
    }))
(UsersContainer)

