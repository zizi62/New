import React from 'react'
import style from './NavBar.module.css'
import {NavLink} from 'react-router-dom'

import FriendsContainer from './Friends/FriendsContaner';


const NavBar = (props)=>{
    return (
            <nav className={style.navbar}>
                <ul>
                    <li><NavLink  className={style.item} activeClassName = {style.active} to ='/profile'>Profile</NavLink></li>
                    <li><NavLink  className={style.item} activeClassName = {style.active}  to ='/dialogs'>Messages</NavLink></li>
                    <li><NavLink  className={style.item} activeClassName = {style.active}  to ='/Music'>Music</NavLink></li>
                    <li> <NavLink className={style.item} activeClassName = {style.active} to ='/news'>News</NavLink></li>
                    <li> <NavLink className={style.item} activeClassName = {style.active} to ='/users'>Users</NavLink></li>
                </ul>
               <FriendsContainer/>
            </nav>
    )
}


export default NavBar;