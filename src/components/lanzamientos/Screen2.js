
import React, { Component } from "react";
import {View,  Text, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native-web';
import { Textfit } from 'react-textfit';


import fondo from '../../images/carousel/fondo.png';
import escena1 from '../../images/carousel/escena 2.png';

import moletar2 from '../../images/carousel/molestar2.png';


import {styles_export} from './StyleLanzamientos'



export default class Screen extends React.Component {

  constructor(props){

    super(props);
    this.state={
      newwidth: '',
      newheight: ''
    }
  
   
  }
  

  render() {

    const {alto, ancho} = this.props;
    
    Image.getSize(escena1, (width, height) => {

      this.setState({
        newwidth: width,
        newheight: height 
      })

    })
    
    return (

     <View style={styles.container}>

<View style={[styles.divtexto, {background: 'linear-gradient(to right , #3B5365, #454041)'}]}>
              
      
            <View style={styles_export.div_presentacion}>
        
                <View style={styles_export.divtitulo}>
                  
                  <Text style={styles_export.txt_titulo}>  ANALISIS TRANSACCIONAL </Text>
                  <Text style={styles_export.txt_subtexto}>  72 Horas antes del Lanzamiento</Text>
                </View>
                <View style={styles_export.divsubtexto}>
                  
                
                <Textfit mode="multi" class="style_texfield"> Extraemos el valor stock en caja </Textfit>
                <Textfit mode="multi" class="style_texfield">SKUs involucrados </Textfit>
                <Textfit mode="multi" class="style_texfield"> Se compara con la venta esperada  </Textfit>
                <Textfit mode="multi" class="style_texfield"> Se asume un 70% de stock necesario para inicio de promo </Textfit>

                  
            


                </View>
 
            </View>
            </View>
            <View style={styles.containerimagen}>

<ImageBackground source = {{uri: fondo}}   
style = {{height: alto, width: ancho}}>
    <Image source = {{uri: escena1}}
     style = {{height: alto, width: ancho,    zIndex: 3}}/>
      <img src={moletar2} class="div_molestar2"   />
      

</ImageBackground>

</View>
      
      </View>

    );
  }
}



const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'row',

    
  },
  containerimagen: {
    flex: 1,
    zIndex: 1,
    backgroundColor: '#3B5365'
  }
,
imagen: {
  flex: 1
}, 
divtexto: {
  textAlign:  'right',
  alignItems:  'right',
  flex: 1,
    zIndex: 0,
    backgroundColor: '#000'
  },
  text_style: {
    color: '#FFF'
  }

});