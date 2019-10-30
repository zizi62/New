import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) =>{
    return (
        <div className="header">
            <img className="img" src="https://pngicon.ru/file/uploads/babochka-768x537.png" alt=""/>
            <div className="loginBlock">
                {props.isAuth
                    ?<div>{props.login} -  <button onClick = {props.logOut}>Log out</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
                
            </div>
        </div>
    )
}


export default Header;