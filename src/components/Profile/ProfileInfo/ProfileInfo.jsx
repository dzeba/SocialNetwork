import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div className={s.profile}>
        <div>
            <img src='https://data.whicdn.com/images/239250961/original.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava+desc
        </div>
    </div>
}
export default ProfileInfo;