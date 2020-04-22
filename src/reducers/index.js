import { combineReducers } from "redux";
import users from './datafacebook'
import chklogin from './chklogin'
import Location from './Location'
import makedirections from './makedirection'
import aedlocations from './aedlocation'
export default combineReducers({
    user: users,
    checklogin : chklogin,
    Location : Location,
    makedirection : makedirections,
    aedlocation: aedlocations

})