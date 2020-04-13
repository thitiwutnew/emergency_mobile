const initialState = {
    chklogin : 1
}

const chklogin = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_LOGIN': 
            return { ...state, chklogin: action.payload } 
        default:
            return state
    }
}

export default chklogin