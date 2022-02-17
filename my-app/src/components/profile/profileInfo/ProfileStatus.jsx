import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import styles from "./ProfileInfo.module.css"

const ProfileStatus = (props) => {
    let urlParams = useParams()

    if (!urlParams.userId) {
        urlParams = {
            userId: '2'
        }
    }

    useEffect(() => {
        props.getUserProfileStatus(urlParams.userId)
    }, [])

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <input autoFocus={true}
                           value={props.status}
                           onBlur={deactivateEditMode}></input>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>}


        </div>
    )
}

export default ProfileStatus