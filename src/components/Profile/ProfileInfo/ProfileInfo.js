import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';

class ProfileInfo extends React.Component {
state = {
    isMode: false
}
    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return <div>
            <img className={style.img} src="https://evo-poeziya.ru/wp-content/uploads/2017/03/TuLp.-1.jpg" alt="" />
            <img src={this.props.profile.photos.large} alt="" />
           <ProfileStatus  status={this.props.status} updateStatus={this.props.updateStatus}/>
            {this.state.isMode&&<input type ="text"/>}
            <p>My name is:</p><p>{this.props.profile.fullName}</p>
            <p>About Me!!! </p> <span>{this.props.profile.aboutMe}</span>
            {this.props.profile.lookingForAJob ? <p>I NEED A JOB</p> : <p>I HAVE A GOOD JOB</p>}
        </div>
    }



}

export default ProfileInfo;