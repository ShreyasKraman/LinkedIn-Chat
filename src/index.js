import  React  from 'react';
import  ReactDOM   from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga' 

import './index.css';
import App  from './App';
import * as serviceWorker from './serviceWorker';
import { addUser } from './actions'
import { setupSocket } from './sockets'
import handleNewMessage from './sage'
import username from '.utils/name'

import reducers from './reducers'

const sageMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sageMiddleware)
)


store.dispatch(addUser('Me'))

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
