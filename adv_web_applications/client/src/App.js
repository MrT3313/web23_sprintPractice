// IMPORTS
import React from 'react';
import {Route, Switch} from 'react-router-dom'

// Private Route
import PrivateRoute from './components/PrivateRoute.js'

// COMPONENTS
import LandingPage from './components/Login.js'
import Homepage from './components/Homepage.js'



// COMPONENT TO EXPORT
function App() {
  return (
    <div className="App">
      <div> WEB23 - Advanced Web Applications Sprint Practice: VIDEO GAMES</div>

      <Switch>
        <PrivateRoute exact path='/homepage' component={Homepage} /> 
        <Route exact path='/' component={LandingPage}/>
        
      </Switch>

      
      
    </div>
  );
}

// EXPORT
export default App;
