const lastNameReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_LAST_NAME':
            return action.payload;
        default:
            return state;
    }
}

export default lastNameReducer;