import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import Avatar from "antd/es/avatar/avatar";
import { AntDesignOutlined } from '@ant-design/icons';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <Avatar
                    size={{
                        xs: 36,
                        sm: 50,
                        md: 60,
                        lg: 100,
                        xl: 180,
                        xxl: 300,
                    }}
                    icon={props.profile.photos.large ? <img
                        src={props.profile.photos.large} alt={"image"}/>
                    : <AntDesignOutlined />}
                />

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;