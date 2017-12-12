import { combineReducers } from 'redux';
import { load, toStore, filter, next } from './reducers';

const rootReducer = combineReducers({
    load,
    toStore,
    filter,
    next
});

export default rootReducer;