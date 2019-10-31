// IMPORTS
import React, {useState} from 'react'

import axiosWithAuth from '../utils/axiosWithAuth.js'
// import axios from 'axios'


// COMPONENT TO EXPORT
function Login(props) {
console.log(props)
// -- //

    const [state, setState] = useState({
        username: undefined,
        password: undefined
    })
        console.log(state)
    // -- //
    const handleChange = e => {
    e.preventDefault()
    // -- //
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = e => {
    e.preventDefault()
    // --//
        axiosWithAuth()
            .post('/api/login', state)
            .then( returnedData => {
                console.log(returnedData)

                localStorage.setItem('token', returnedData.data.payload )
                
                props.history.push('/homepage')
            })
            .catch(err => {
                console.log(err)
            })
        


    }
    // -- //
    return (
        <>
            <div>LOGIN COMPONENT</div>
            <form   
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    id='username'
                    placeholder='username'
                    value={state.username}
                    onChange={handleChange}
                ></input>
                <input
                    type='text'
                    id='password'
                    placeholder='password'
                    value={state.password}
                    onChange={handleChange}
                ></input>
                <button>Click Me Bro</button>
            </form>
        </>
    )
}


// EXPORTS
export default Login