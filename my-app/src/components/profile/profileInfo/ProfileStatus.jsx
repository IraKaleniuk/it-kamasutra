import React, {useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }

    return (
        <div>
            {editMode ?
                <div>
                    <input autoFocus={true}
                           onChange={onStatusChange}
                           value={status}
                           onBlur={deactivateEditMode}></input>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{
                        props.status === '' ? '------' : props.status
                    }</span>
                </div>}


        </div>
    )
}

export default ProfileStatus