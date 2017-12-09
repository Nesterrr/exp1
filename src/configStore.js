import { createStore } from 'redux';

import newsApp from './reducers';

const configureStore = () => {
    const store = createStore(newsApp);
/*
    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos,
        });
    }, 1000));
*/
    return store;
};

export default configureStore;