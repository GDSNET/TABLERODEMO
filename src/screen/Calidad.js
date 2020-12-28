import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';


 
class Calidad extends Component {

  funExec (){
    const {stopActionCalidad, startActionCalidad, visible } = this.props;
    if (visible){
      
      stopActionCalidad();
    }
    else{
      startActionCalidad()
    }
  }

  funExecVariables( stopActionCalidad, startActionCalidad, visible){
    if (visible){
      stopActionCalidad();
    }
    else{
      startActionCalidad()
    }
  }


  render() {
    const {estado, stopActionCalidad, startActionCalidad, visible } = this.props;
    return (
      <div>
           
   
        <div className="Card0">
          <h1>hola</h1>
        </div>
        <div className="Card1">
          <h1>hola</h1>
        </div>
        <div className="Card2">
          <h1>hola</h1>
        </div>

        <div className="Card3">
          <h1>hola</h1>
        </div>
 


      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    visible: state.calidad.visible,
    estado: state.calidad.estado

  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
  combinaActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(Calidad);
