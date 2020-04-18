import { combineReducers } from "redux";
import users from './datafacebook'
import chklogin from './chklogin'
import Location from './Location'
import makedirections from './makedirection'
export default combineReducers({
    user: users,
    checklogin : chklogin,
    Location : Location,
    makedirection : makedirections
})