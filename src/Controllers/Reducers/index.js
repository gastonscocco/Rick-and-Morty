import { combineReducers } from 'redux';
import generalReducer from './generalReducer';
import sessionReducer from './sessionReducer';



export default combineReducers({
    //reducers here
    sessionReducer,
    generalReducer
})