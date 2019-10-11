// IMPORTS
    import axios from 'axios'

// CREATE ACTION TYPES
export const API_CALL_START = 'API_CALL_START' 
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS' 
export const API_CALL_FAILURE = 'API_CALL_FAILURE' 

// dispatch MAGIC is the secret Dispatch call after the Action Creator
// dispatch(a_apiCALL())

export const a_apiCALL = () => {
    // Dispatch First Action
        return dispatch => {
            dispatch({
                type: API_CALL_START,
            })
            
            // Axios Call
            axios
                .get(`https://restcountries.eu/rest/v2/all`)
                .then( countryData => {
                    console.log('countryData.data', countryData.data )
                    // -- //
                    dispatch({
                        type: API_CALL_SUCCESS,
                        payload: countryData.data 
                    })
                })
                .catch( err => {
                    dispatch({
                        type: API_CALL_FAILURE,
                        payload: err 
                    })
                })

        }

    

    // Then & Catch --> dispatch SUCCESS or FAILURE actions
}