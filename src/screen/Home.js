import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {TouchableOpacity, Text} from 'react-native-web';
 
const dataPie = [
  
  {value: 60, stroke: "#2f7d6d"},
  {value: 40, stroke: "#a1d9ce"},
]
 
class Home extends Component {

  state = {
    rating: 1,
    label: 'hola',
    valor: '50'
  }


 
funCambiarRating(label, valor ){
this.setState({
  rating: valor,
  label: label,
  valor: valor,
})

  }

  funEnvioInfo(){
    if (this.state.label == 'Sell-Out'){
      return(
        <div>
          <Text>{this.state.label}</Text>
        </div>
      )
    }
    else if (this.state.label === 'FillRate'){
      return(
        <div>
          <Text>{this.state.label}</Text>
        </div>
      )
    }
    else 
      return(
        <div>
          <Text>{this.state.label}</Text>
          
        </div>
      )
    
  }


  render() {
    const {controlestado,calidadestado, stopAction, startAction, visible } = this.props;
    return (
      <div className="div_Dash">

<iframe src="http://www2.gdsnet.com/gdssite/es/"

width="100%" height="925" scrolling="auto"> </iframe>

       
      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    ...state,
    visible: state.control.visible,
   controlestado: state.control.estado,
  calidadestado: state.calidad.estado

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
