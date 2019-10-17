//  IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

// COMPONENTS
import App from './App';

// RENDER
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);


