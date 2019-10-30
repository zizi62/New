import React from 'react'
import style from '../User.module.css'
import {NavLink} from 'react-router-dom'
import *as axios from 'axios';
import { usersAPI } from '../../../api/api'


const User = (props) => {

    let unFollowUser=()=>{
        props.unfollowThunkCreater(props.id)
    //     props.toggleIsFollowing(true, props.id)
    //     usersAPI.unFollow(props.id)
    //    .then(data => { 
    //     if(data.resultCode===0){
    //         props.unFollowUser(props.id)
    //         props.toggleIsFollowing(false, props.id)
    //     }
    //    })
        
    }

    let followUser=()=>{
        props.followThunkCreater(props.id)
    //     props.toggleIsFollowing(true, props.id)
    //     usersAPI.follow(props.id)
    //    .then(data => { 
    //     if(data.resultCode===0){
    //         props.followUser(props.id)}
    //         props.toggleIsFollowing(false, props.id)
    //     })
    }

    return(
        
        <div className={style.userBox}>
            <NavLink to={'/profile/' + props.id}>
            <img className={style.userAva}src={props.photos.small!==null?props.photos.small:'https://www.p2p-club.ru/template/img/user/user-man.png'} alt=""/>
            </NavLink>
            <div>{props.name}</div>
            <div>{props.id}</div>
            <div>{props.status}</div>
            
            {props.followed
            ?<button disabled={props.followingInProgress.some(id => id === props.id)} onClick={unFollowUser}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={followUser}>Follow</button>}
        </div>
    )

}

export default User;

