
import * as types from '../constants/controlConstants'



  export function startAction()  {
    return {
        type: types.START_ACTION,
        visible: true,
        estado: 'paso Star'
     }
  };

  export function stopAction()  {
    return {
        type: types.STOP_ACTION,
        visible: false,
        estado: 'paso Stop'
     }
  };
  
  export function funCalCambiarSala(numero)  {
    return {
        type: types.AGREGAR_NUMERO,
        estado: 'cambiando Numero...',
        numero: numero
     }
  };
  