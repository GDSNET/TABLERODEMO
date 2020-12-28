


import { combineReducers } from 'redux';
import controlReducers from './controlReducers'
import calidadReducers from './calidadReducers'
import toReducers from './toReducers'

const rootReducer = combineReducers({
    control: controlReducers,
    calidad: calidadReducers,
    to: toReducers
})
export default rootReducer