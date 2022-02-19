import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Alert} from "antd";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const [notAllowed, setNotAllowed] = useState(false);

    let urlParams = useParams()
    const activateEditMode = () => {
        if (urlParams.userId === '22531') {
                setEditMode(true)
            }
        else {
            setNotAllowed(true)
        }
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
            { notAllowed ?
                <Alert
                    message="Error Action"
                    description="You can't change status. It's not your profile"
                    type="error"
                    closable
                    onClose={() => {setNotAllowed(false)}}
                /> :
                <></>
            }

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