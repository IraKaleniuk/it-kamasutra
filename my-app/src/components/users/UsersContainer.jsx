import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingInProgress
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {API} from "../../api/api";

const UsersContainer = (props) => {

    useEffect(() => {
        props.toggleIsFetching(true)
        API.getUsers(props.currentPage, props.pageSize).then(data => {
            props.toggleIsFetching(false)
            props.setUsers(data.items)
            props.setTotalUsersCount(data.totalCount)
        })
    }, [])

    let onPageChange = (p) => {
        props.setCurrentPage(p)
        props.toggleIsFetching(true)
        API.getUsers(p, props.pageSize).then(data => {
            props.toggleIsFetching(false)
            props.setUsers(data.items)
        })
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
                   toggleFollowingInProgress={props.toggleFollowingInProgress}
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

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
    })(UsersContainer)

