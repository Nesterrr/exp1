import './App.css'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import Content from './components/content/Content'
import NotFound from './components/NotFound'
import Main from './components/main/index'
import Details from './components/content/Details'

import initStore from './ducks/store'
import rootSaga from './ducks/index'

export const store = initStore()

store.runSaga(rootSaga)

class App extends Component {
  render() {
      return (
        <div className="App">
            <Provider store = { store }>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path='/' component = { Main }/>
                            <Route exact path='/content' component={ Content } />
                            <Route path='/content/filters/:filter' component={ Content } />
                            <Route path='/content/:id' render={ ()=><Details data={ store } /> } />
                            <Route component={ NotFound } />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        </div>
    )
  }
}

export default App;
