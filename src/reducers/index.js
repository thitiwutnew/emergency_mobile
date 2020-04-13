import { combineReducers } from "redux";
import users from './datafacebook'
import chklogin from './chklogin'
import Location from './Location'

export default combineReducers({
    user: users,
    checklogin : chklogin,
    Location : Location
})