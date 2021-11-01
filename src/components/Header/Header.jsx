import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://media.istockphoto.com/photos/soft-focusdoctor-working-to-laptop-computeronline-technology-of-
        picture-id1317939937?b=1&k=20&m=1317939937&s=170667a&w=0&h=xuOYLoqkwPryK4WAYC_BRbfEfPjWk87Sz7mx94--R30='/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login </NavLink>
            }

        </div>
    </header>
}
export default Header;