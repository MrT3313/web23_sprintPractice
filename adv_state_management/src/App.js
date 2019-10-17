// IMPORTS
import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import styled from 'styled-components'

// COMPONENTS
import Countries from './components/Countries.js'

// IMPORT ACTION CREATORS
import {a_apiCALL} from './redux/actions/a_apiCALL.js'

// STYLED COMPONENTS
const APPCONTAINER = styled.div`
  display: flex;
  flex-direction: column;

  .RED {
    background-color: yellow;
  }
`;

// COMPONENT TO EXPORT
function App({state, a_apiCALL}) {
  console.log('<App /> props: ',state)
  // -- //
  const HandleClick = e => {
    e.preventDefault()
    // -- //
    a_apiCALL()
  }
  // -- //
  return (
    <APPCONTAINER className="App">
      <div>HELLO</div>
      <button
        onClick={HandleClick}
      >GET DATA BRO</button>
      {state !== undefined &&
        <>
          <div className='RED'>WE HAVE DATA!!!</div>
          <Countries />
        </>
      }

    </APPCONTAINER>
  );
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
  console.log(state)
  return {
    state: state.API_DATA.appData
  }
}

// EXPORT w/ CONNECT 
export default connect(
  mapStateToProps, // Map State To Props
  {a_apiCALL} // Linked Action Creators
)(App)



