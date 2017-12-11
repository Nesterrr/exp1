import { combineReducers } from 'redux';
import { load, toStore } from './reducers';

const rootReducer = combineReducers({
    load,
    toStore
});

export default rootReducer;