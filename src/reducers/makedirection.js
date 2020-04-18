const initialState = {
    makelocation : []
}

const makedirection = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_DIRECTION': 
            return { ...state, makelocation: action.payload } 
        default:
            return state
    }
}

export default makedirection