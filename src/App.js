import React, { Component } from 'react';
//import { createStore, applyMiddleware } from 'redux'
//import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Login from './components/content/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import initStore from './ducks/store'
import rootSaga from './ducks/index'

export const store = initStore();

store.runSaga(rootSaga);

//store.dispatch({type: 'CONTENT/FETCH'});

//store.dispatch({type: 'TO_STORE', data: {eq: 2}});
/*
import createSagaMiddleware, { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

const ADD = (id) => ({
    type: 'ADD',
    id: id
});
const article = (state, action) => {

};
const articles = (state = {}, action) => {
    const id = action.id;
    switch (action.type) {
        case 'ADD':
            return {
                ...state, id
            };
        case 'ADD':
            return {
                ...state, id
            };
        default:
            return state;
    }
};

const getdata = (state = 0, action) => {
    switch (action.type) {
        case 'GET_DATA_FROM_API':
            return {
                act: 'action'
            };
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    articles,
    getdata
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)


function* couterSaga() {
    yield delay(10000);
    yield put({type: 'INCREMENT'});
};


export const store = createStore(
    rootReducer,{}
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(couterSaga);
*/
class App extends Component {
  render() {
      return (
      <div className="App">
            <Provider store = { store }>
                <Router>
                <div>
                  <Header />
                    <Switch>
                        <Route exact path="/" component={ Content } />
                        <Route path="/login" component={ Login } />
                        <Route path="/footer" component={ Footer } />
                    </Switch>
                </div>
                </Router>
            </Provider>


          <Footer />
      </div>
    );
  }
}


export default App;
