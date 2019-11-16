export const setSearchTerm = (searchTerm) => {
    return {
        type: 'SET_SEARCH_TERM',
        payload: searchTerm
    }
}

export const setJobList = (value) => {
    return {
        type: 'SET_JOB_LIST',
        payload: value
    }
}

export const setJobId = (jobId) => {
    return {
        type: 'SET_JOB_ID',
        payload: jobId
    }
}

export const setFirstName = (value) =>{
    return {
        type: 'SET_FIRST_NAME',
        payload: value
    }
}

export const setLastName = (value) =>{
    return {
        type: 'SET_LAST_NAME',
        payload: value
    }
}

export const setEmail = (value) =>{
    return {
        type: 'SET_EMAIL',
        payload: value
    }
}

export const setResume = (value) => {
    return {
        type: 'SET_RESUME',
        payload: value
    }
}

