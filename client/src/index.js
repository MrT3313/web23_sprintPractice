// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

// Redux Boilerplate
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Dev Tools
import { compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from './redux/reducers'

// COMPONENTS
import App from './App';

// ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// STORE
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)
    console.log('THIS IS THE STORE',store)


// RENDER
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


