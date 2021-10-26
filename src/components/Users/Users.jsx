import React from "react";
import s from './Users.module.css'

let Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id} className={s.usersPage}>
                    <div className={s.leftSide}>
                        <img src={u.photoUrl}/>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <div>
                            {u.fullName}
                        </div>
                        <div className={s.location}>
                            {u.location.city}
                            {u.location.country}
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
/*{u.id}{ u.fullName }{u.status}*/

export default Users;