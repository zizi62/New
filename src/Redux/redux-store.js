import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './Redusers/ProfileReducer';
import dialogReducer from './Redusers/DialogReducer';
import sidebarReducer from './Redusers/SidebarReducer';
import userReducer from "./Redusers/UsersReducer";
import authReducer from "./Redusers/auth-reducer";
import thunkMiddleware  from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./Redusers/app-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    friendPage:sidebarReducer,
    usersPage: userReducer,
    authData:authReducer,
    form: formReducer,
    app: appReducer

})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;