import { combineReducers } from 'redux';
import { load, toStore, filter } from './reducers';

const rootReducer = combineReducers({
    load,
    toStore,
    filter
});

export default rootReducer;