import React from "react";
import styles from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i1.sndcdn.com/avatars-3ZCCUZugLlCvBtcQ-KrUSBA-t500x500.jpg',
                followed: false,
                fullName: 'Ira',
                status: 'I am a boss',
                location: {city: 'Mlyniv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://i1.sndcdn.com/avatars-3ZCCUZugLlCvBtcQ-KrUSBA-t500x500.jpg',
                followed: true,
                fullName: 'Natali',
                status: 'I am a boss too',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://i1.sndcdn.com/avatars-3ZCCUZugLlCvBtcQ-KrUSBA-t500x500.jpg',
                followed: false,
                fullName: 'Kate',
                status: 'I am a boss too',
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ]);
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt={'photo'} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;