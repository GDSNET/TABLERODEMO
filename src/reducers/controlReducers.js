
import * as types from '../constants/controlConstants'
const initialState = {
  visible: true,
   estado: 'control',
   numero: null,
}

  
const counterReducer = (state = initialState, action) => {
switch (action.type) {
    case types.STOP_ACTION:
return {...state,
    visible: action.visible,
    estado: action.estado,
    
};
break;
    case types.START_ACTION:
    return {...state,
        visible: action.visible,
        estado: action.estado,
        
    };
    break;
default:
return state
}
}
export default counterReducer;
