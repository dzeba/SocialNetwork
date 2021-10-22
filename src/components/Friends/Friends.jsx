import React from "react";
import s from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsElements = props.state.friends
        .map(friends =>
            <FriendsItem link={friends.link} id = {friends.id}/>
        )


    return <div className={s.item}>
        {friendsElements}
        </div>
}
export default Friends;