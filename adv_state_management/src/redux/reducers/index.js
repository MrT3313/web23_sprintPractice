// IMPORTS
import { combineReducers } from 'redux'

// IMPORTING INDIVIDUAL REDUCERS
import {r_apiData as API_DATA} from './r_apiData'

// COMBINED REDUCER
export const rootReducer = combineReducers({
    API_DATA,
})