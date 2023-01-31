import { combineReducers } from 'redux';
import timer from './timer';
import message from './message';
const rootReducer = combineReducers({
    timer,
    message
});

export default rootReducer;