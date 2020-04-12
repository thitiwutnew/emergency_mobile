const initialState = {
    name: 'thitiwut boonyoung'
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERNAME': 
            return { ...state, name: action.payload } 
        default:
            return state
    }
}

export default users