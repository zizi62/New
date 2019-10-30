import { authAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';
const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const setUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { id, login, email, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getMe()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUserData(id, login, email, true))
    }


}

export const login = (email, password, rememberMe) => async(dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', { _error: message }));
        }

    

}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    

}


export default authReducer;