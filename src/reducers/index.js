import { combineReducers } from "redux";
import users from './datafacebook'
import chklogin from './chklogin'


export default combineReducers({
    user: users,
    checklogin : chklogin
})