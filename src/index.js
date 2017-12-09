import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './../node_modules/material-components-web/dist/material-components-web.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader'
//import Content from "./components/content/Content";

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root'),
    );
}

render(App);

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

if (module.hot) {
    module.hot.accept('./App', () => { render(App) });
}

