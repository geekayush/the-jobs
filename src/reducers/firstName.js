const firstNameReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return action.payload;
        default:
            return state;
    }
}

export default firstNameReducer;