// IMPORT ACTION CREATORS
import {
    API_CALL_START,
    API_CALL_SUCCESS,
    API_CALL_FAILURE,
} from '../actions/a_apiCALL.js'

// INITIAL STATE 
const initialState = {
    is_fetching: false,
    error: '',
    appData: undefined
}

// REDUCER
export const r_apiData = (state = initialState, action) => {
    // console.log(state, action)
    // console.log(action.payload)
    // -- //
    switch(action.type) {
        case API_CALL_START:
            return {
                ...state,
                is_fetching: true
            }
        case API_CALL_SUCCESS:
            const objToPass =  {
                ...state,
                is_fetching: false,
                appData: [...action.payload]
            }
            console.log(objToPass)
            //-- // 
            return objToPass

        case API_CALL_FAILURE:
            return {
                ...state,
                is_fetching: false,
                error: action.payload 
            }
        default:
            return state
    }
}