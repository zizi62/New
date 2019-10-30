import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { logOut} from '../../Redux/Redusers/auth-reducer'





class HeaderContaner extends React.Component {
  

    render() {
        return (
            <Header {...this.props} />
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        logOut:()=>dispatch(logOut())
    }
} 

const mapStateToProps = (state) => {
    return {
        profileData: state.authData,
        isAuth: state.authData.isAuth,
        login: state.authData.login

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContaner);