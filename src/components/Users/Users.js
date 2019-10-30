import React from 'react'
import User from './User/User';
import style from './User.module.css'
import Paginator from '../common/Paginator/Paginator'



let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];

    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    return (
        <>

        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged ={props.onPageChanged}/>
            {/* <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}
                    > {p}  </span>
                })}


            </div> */}
            <div>
                <button onClick={props.getUsers}>SET USERS</button>
                <div className={style.usersBox}>{props.users.map(u => {
                    return <User {...u}
                        unFollowUser={props.unFollowUser}
                        followThunkCreater={props.followThunkCreater}
                        unfollowThunkCreater={props.unfollowThunkCreater}
                        followingInProgress={props.followingInProgress} />
                })}</div>

            </div>
        </>
    )
}






export default Users;