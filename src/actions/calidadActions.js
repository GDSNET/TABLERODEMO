

import * as types from '../constants/calidadConstants'



  export function startActionCalidad()  {
    return {
        type: types.CALIDAD_START_ACTION,
        visible: true,
        estado: 'paso Star Calidad'
     }
  };

  export function stopActionCalidad()  {
    return {
        type: types.CALIDAD_STOP_ACTION,
        visible: false,
        estado: 'paso Stop Calidad'
     }
  };
  
  export function calidadagregarNumero(numero)  {
    return {
        type: types.CALIDAD_AGREGAR_NUMERO,
        estado: 'cambiando Numero...',
        numero: numero
     }
  };
  