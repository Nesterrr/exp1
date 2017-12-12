import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'

const initStore = (initState = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = applyMiddleware(sagaMiddleware);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, initState , composeEnhancers(middleware));

    store.runSaga = sagaMiddleware.run;

    return store;
}

export default initStore;