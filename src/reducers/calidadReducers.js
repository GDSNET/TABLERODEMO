
import * as types from '../constants/calidadConstants'
const initialState = {
  visible: false,
   estado: 'calidad',
   numero: null,
}


  
const calidadReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CALIDAD_STOP_ACTION:
        return {...state,
            visible: action.visible,
            estado: action.estado,
            
        };
        break;
        case types.CALIDAD_START_ACTION:
        return {...state,
            visible: action.visible,
            estado: action.estado,
            
        };
        
    default:
    return state
    }
    }
    export default calidadReducer;