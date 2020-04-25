const initialState = {
    userdata: ''
}

const userdata = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERDATA': 
            return { ...state, userdata: action.payload } 
        default:
            return state
    }
}

export default userdata