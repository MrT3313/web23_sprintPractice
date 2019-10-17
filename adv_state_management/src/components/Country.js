// IMPORTS
import React from 'react'
import {connect} from 'react-redux'

// COMPONENT TO EXPORT
const Country = (props) => {
    console.log(props)
    // -- //
    return (
        <div>COUNTRY</div>
    )
}

// // MAP STATE TO PROPS
// const mapStateToProps = state => {
//     console.log(state)
//     return {
        
//     }
// }

// EXPORT w/ CONNECT
export default connect(
    null, // MSTP
    {} // Action creators 
)(Country)