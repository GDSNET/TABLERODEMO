import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "./actions/index";
import {bindActionCreators} from 'redux';
import Main from './screen/Main'
import Promocion from './screen/Promocion'
import ToAction from './toaction/ToRoot'

class App extends Component {

constructor(props){

  super(props);
  this.state={
      mensaje:'Hola Mundo',
      variable : ''
  }

 
}



funCambiar(variable){
  
try {

  if (this.props.visible) 
  
  {
    return( this.props.startAction) 
  } 
  else 
  return( this.props.stopAction) 
    
} catch (error) {
  
}


}

  render() {
    return (



      <div >
        <ToAction />  
      </div>
    );
  }
}





function mapStateToProps(state){
  return{
    ...state

  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
ControlActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
