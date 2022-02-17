import React, {useState} from "react";
// import styles from "./ProfileInfo.module.css"

const ProfileStatus = (props) => {

    /*let state = {
        editMode: false
    }*/

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