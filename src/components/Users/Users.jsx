import React from "react";
import s from "./Users.module.css";
import avatar from '../../assets/avatar.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgress} from "../../redux/usersReducer";


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
                                props.toggleFollowingProgress(true, u.id)

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5fbf1f38-0a7b-42ec-aa23-9ae20b1a1b1c"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })
                            }

                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '5fbf1f38-0a7b-42ec-aa23-9ae20b1a1b1c'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })
                            }

                            }>Follow</button>
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