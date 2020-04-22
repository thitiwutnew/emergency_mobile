const initialState = {
    aedlocation : []
}

const aedlocations = (state = initialState, action) => {
    switch (action.type) {
        case 'AED_ALL': 
            return { ...state, aedlocation: action.payload } 
        default:
            return state
    }
}

export default aedlocations