import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowingInProgress, getUsers, follow, unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";

const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, [])

    let onPageChange = (p) => {
        props.setCurrentPage(p)
        props.getUsers(p, props.pageSize);
    }
    let generatePageRange = (currentPage, lastPage) => {
        const delta = 1;

        const range = [];
        for (let i = Math.max(2, (currentPage - delta)); i <= Math.min((lastPage - 1), (currentPage + delta)); i += 1) {
            range.push(i);
        }

        if ((currentPage - delta) > 2) {
            range.unshift('...');
        }
        if ((currentPage + delta) < (lastPage - 1)) {
            range.push('...');
        }

        range.unshift(1);
        if (lastPage !== 1) range.push(lastPage);

        return range;
    }

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   generatePageRange={generatePageRange}
                   currentPage={props.currentPage}
                   onPageChange={onPageChange}
                   users={props.users}
                   unfollow={props.unfollow}
                   follow={props.follow}
                   followingInProgress={props.followingInProgress}
            />
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
        follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers
    }))
(UsersContainer)

