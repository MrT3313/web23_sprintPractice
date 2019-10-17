// IMPORTS
import React from 'react';
import {Route} from 'react-router-dom'

// COMPONENTS
import LandingPage from './components/Login.js'


// COMPONENT TO EXPORT
function App() {
  return (
    <div className="App">
      <div> WEB23 - Advanced Web Applications Sprint Practice: VIDEO GAMES</div>

      <Route exact path='/' component={LandingPage}/> 
      
    </div>
  );
}

// EXPORT
export default App;
