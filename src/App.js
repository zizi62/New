import React from 'react';
import './App.css';
import HeaderContaner from './components/Header/HeaderContaner';
import NavBar from './components/NavBar/NavBar';
import DialogPage from './components/DialogPage/DialogPage';
import { Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './Redux/Redusers/app-reducer';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom'
import Preloader from './components/common/preloader/preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()

}

  render() {
    if(!this.props.initialized){return <Preloader/>}
 
    return (

      <div className="app-wrapper">
        <HeaderContaner />
        <NavBar />
        <div className="app-wrapper-content">
          {/* <Route path='/profile/' render={() =><ProfileContaner />} /> */}
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() =>
            <DialogPage  />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>

    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    initializeApp: ()=>dispatch(initializeApp()),
  }
} 

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
     
  }
}

export default compose (
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))(App);

