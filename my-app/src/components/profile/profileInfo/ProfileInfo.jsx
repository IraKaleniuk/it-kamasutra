import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}
                    alt={"Photo"}/>
            </div>
            <div className={styles.descriptionBlock}>
                <img
                    src={"https://media1.popsugar-assets.com/files/thumbor/l3tGpIatkHybxJGKNsK1BDe_WJs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"}
                    alt={"Photo"}/>
            </div>
        </div>
    )
}

export default ProfileInfo;