import searchTermReducer from './searchTerm';
import jobIdReducer from './jobId';
import jobListReducer from './jobList';
import firstNameReducer from './firstName';
import lastNameReducer from './lastName';
import emailReducer from './email';
import resumeReducer from './resume';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
    jobId: jobIdReducer,
    jobList: jobListReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    email: emailReducer,
    resume: resumeReducer

});

export default rootReducer;