import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import {API} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return (
        <div>
            {
                props.generatePageRange(props.currentPage, pagesCount)
                    .map(p => {
                        return <span
                            className={props.currentPage === p ? styles.selectedPage : styles.page}
                            onClick={(e) => props.onPageChange(p)}>{p}</span>
                    })
            }
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'photo'}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, u.id)

                                    API.unfollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false, u.id)
                                    })
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, u.id)
                                    API.follow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false, u.id)
                                    })

                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}


export default Users;