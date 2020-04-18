const initialState = {
    Location: ''
}

const Location = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCATION': 
            return { ...state, Location: action.payload } 
        default:
            return state
    }
}

export default Location