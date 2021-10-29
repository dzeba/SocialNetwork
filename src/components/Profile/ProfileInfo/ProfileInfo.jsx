import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return <div className={s.profile}>
        <div>
            <img src='https://data.whicdn.com/images/239250961/original.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
        </div>
    </div>
}
export default ProfileInfo;