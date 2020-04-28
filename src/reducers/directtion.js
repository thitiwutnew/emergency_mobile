const initialState = {
    makedirectlocation : ''
}

const direction = (state = initialState, action) => {
   
    switch (action.type) {
        case 'MAKE_DIRECTIONS': 
            return { ...state, makedirectlocation: action.payload } 
        default:
            return state
    }
}

export default direction