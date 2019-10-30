import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators'
import { connect } from 'react-redux';
import { login } from '../../Redux/Redusers/auth-reducer';
import {Redirect} from 'react-router-dom'
import s from '../common/FormControls/FormControls.module.css'




const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error&&<div className={s.formSummuryError}>
                {props.error}
            </div>}
            
            <div>
                <Field placeholder='login' name='email' component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder='password' type='password' name='password' component={Input} validate={[required]} />
            </div>
            <div>
                <Field type='checkbox' name="rememberMe" component='input' /> remember me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
 
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to='/profile'/>
    }
    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )

}

const mapStateToProps=(state)=>{
    return {
        isAuth: state.authData.isAuth
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return {
        login: (email, password, rememberMe)=>(dispatch(login(email, password, rememberMe)))
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);