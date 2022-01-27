import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                            {u.followed ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '1d0cfe8f-daf9-40eb-80f3-49b2538d4e80'
                                        }
                                    })
                                        .then(response => {
                                            return response.data.resultCode === 0 ? props.unfollow(u.id) : ''
                                        })

                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '1d0cfe8f-daf9-40eb-80f3-49b2538d4e80'
                                        }
                                    })
                                        .then(response => {
                                            return response.data.resultCode === 0 ? props.follow(u.id) : ''
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