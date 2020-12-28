import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';


 
class Home extends Component {

 
  funExec (){
    const {stopAction, startAction, visible } = this.props;
    if (visible){
      
      stopAction();
    }
    else{
      startAction()
    }
  }

  funExecVariables( stopAction, startAction, visible){
    if (visible){
      stopAction();
    }
    else{
      startAction()
    }
  }


  render() {
    const {estado, stopAction, startAction, visible } = this.props;
    return (
      <div>
           
        <p> hola:  {estado} </p>
        
        <button style={{width:100 ,height:100}} tittle='Boton' 
        onClick={visible ? stopAction : startAction}>
       Funcion On Click
        </button>

        <button style={{width:100 ,height:100}} tittle='Boton' 
        onClick={()=>{this.funExec()}}>
         Funcion Antes Render 
        </button>

        <button style={{width:100 ,height:100}} tittle='Boton' 
        onClick={()=>{this.funExecVariables( stopAction, startAction, visible)}}>
         Funcion con Variables
        </button>

      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    
    visible: state.control.visible,
    estado: state.control.estado

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



export default connect(mapStateToProps, mapDispatchToProps)(Home);
