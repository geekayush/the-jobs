const resumeReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_RESUME':
            return action.payload;
        default:
            return state;
    }
}

export default resumeReducer;