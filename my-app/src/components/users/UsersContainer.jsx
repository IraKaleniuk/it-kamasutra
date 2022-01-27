import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";

const UsersContainer = (props) => {

    useEffect(() => {
        props.toggleIsFetching(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            params: {
                page: props.currentPage,
                count: props.pageSize
            }
        }).then(response => {
            props.toggleIsFetching(false)
            props.setUsers(response.data.items)
            props.setTotalUsersCount(response.data.totalCount)
        })
    }, [])

    let onPageChange = (p) => {
        props.setCurrentPage(p)
        props.toggleIsFetching(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            params: {
                page: p,
                count: props.pageSize
            }
        }).then(response => {
            props.toggleIsFetching(false)
            props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    })
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
    })(UsersContainer)

