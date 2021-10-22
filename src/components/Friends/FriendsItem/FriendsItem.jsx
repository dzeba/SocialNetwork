import React from "react";
import s from './FriendsItem.module.css'
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    return (
        <div className={s.friendItem}>
            <div> {props.link} </div>
        </div>
    )
}
export default FriendsItem;