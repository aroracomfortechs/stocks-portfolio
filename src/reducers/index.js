import { combineReducers } from 'redux';
import firstReducer from './firstReducer';

export default combineReducers({
    assignment: firstReducer,
});