import React from "react";
import s from "./Users.module.css";
import avatar from '../../assets/avatar.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgress, unfollow} from "../../redux/usersReducer";
import {usersAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            return <button onClick={() => {
                props.onPageChanged(p)
            }} className={props.currentPage === p && s.selectedPage}> {p} </button>
        })
        }
        {props.users.map(u => <div key={u.id} className={s.usersPage}>
                <div className={s.leftSide}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : avatar}/>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </div>
                <div className={s.rightSide}>
                    <div>
                        {u.name}
                    </div>
                    <div className={s.location}>
                        {'u.location.city'}
                        {'u.location.country'}
                    </div>
                    <div>
                        {u.status}
                    </div>

                </div>

            </div>
        )
        }
    </div>
}
export default Users;