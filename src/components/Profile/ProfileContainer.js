import Profile from "./Profile";
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import { setUserProfileAC, getUserProfile, getStatus, updateStatus } from '../../Redux/Redusers/ProfileReducer'
import{withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { 
            userId = this.props.authorizedUserId; 
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}  status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => dispatch(setUserProfileAC(profile)),
        getUserProfile: (userId) => dispatch(getUserProfile(userId)),
        getStatus:(userId) => dispatch(getStatus(userId)),
        updateStatus:(status) => dispatch(updateStatus(status))
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.authData.id,
        isAuth: state.authData.isAuth,

    }
}

// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer)

// let ProfileContainerRedirect = withAuthRedirect(ProfileContainer)

// let WithUrlDataContainerToProps = withRouter(ProfileContainerRedirect)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
// connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerToProps);