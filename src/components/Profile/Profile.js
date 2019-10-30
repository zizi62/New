import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css'
import MyPostContainer from './MyPostContainer';
import Preloader from '../common/preloader/preloader';


const Profile = (props) => {
   
    return (
       
        <div className={style.profile}>
            <ProfileInfo profile={props.profile} status = {props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer store={props.store}/>
        </div>

    )
}


export default Profile;