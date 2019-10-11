// IMPORTS
import React from 'react'
import {connect } from 'react-redux'

// COMPONENTS
import Country from './Country.js'

// COMPONENT TO EXPORT
const Countries = ({countriesData}) => {
    console.log(countriesData)
    // -- //
    return (
        <>
            <div>HELLO FROM COUNTRIES</div>
            {countriesData.map((item, index) => {
                return <Country item={item} key={index} />
            })}
        </>
    )
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
    console.log(state)
    return {
        countriesData: state.API_DATA.appData
    }
}

// EXPORT w/ CONNECT
export default connect(
    mapStateToProps, // MSTP
    {} // Action creators 
)(Countries)