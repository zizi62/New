import React from 'react';
import style from './Friends.module.css'
import Friend from './Friend/Friend';


const Friends = (props) => {
    return (
        <div><h2>Friends</h2>
            <div className={style.friends}>
                {props.friendPage.person.map(friend => <Friend key={friend.id} {...friend} />)}
            </div>
        </div>
    )
}

export default Friends