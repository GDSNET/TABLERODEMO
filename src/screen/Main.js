import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {TouchableOpacity, Text, View, StyleSheet} from 'react-native-web'
import Home from "./Home";

import Lanzamientos from './Lanzamientos'
import SellOut from './ScreenSellOut'
import Arbol from './ScreenArbol'
import Promocion from './ScreenPromocion'
import Carpetas from './Carpetas'
import DashboardOld from './DashboardOld'
import Lanzamientos2 from './Lanzamientos2'
import Lanzamientos3 from './Lanzamientos3'

import { IoIosMenu } from "react-icons/io";
import logo from '../images/gds.svg';


//import "../css/index.css";


class Main extends Component {

  state = {
    menu: true,
    menu_class: 'toggled'
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
        this.setState({
            menu_class: 'toggled',
        })
    } else {
        this.setState({
            menu_class: '',
        })
    }
}

  CambiaColor(){
this.setState({
  menu: !this.state.menu
})

this.setToggleTopMenuClass();
  }

  aparece(){
    if(this.state.menu){
      return (
        <TouchableOpacity  hide={this.state.menu} >
        <Text >
          aparecio
        </Text>
      </TouchableOpacity>
      )
    }
  }

  render() {
    
    
    let top_menu_class = `top-menu ${this.state.menu_class}`
    let top_dash_class = `dashboard ${this.state.menu_class}`
    return (
      <div className="principal">
      <HashRouter>
        <div  className={top_menu_class} >
          <div  className={"div_logo"} >
            <img src={logo} alt="Logo" className={"logo"} />
          </div>
          <ul>
            <li><NavLink to="/GDS">GDS</NavLink></li>
            <li><NavLink to="/SellOut">SellOut</NavLink></li>
            <li><NavLink to="/Arbol">Arbol</NavLink></li>
            <li><NavLink to="/Promocion">Promocion</NavLink></li>
            <li><NavLink to="/Lanzamientos">Lanzamientos</NavLink></li>
            <li><NavLink to="/Carpetas">Carpetas</NavLink></li>
            <li><NavLink to="/DashboardOld">DashboardOld</NavLink></li>
            <li><NavLink to="/Lanzamientos2">Lanzamientos2</NavLink></li>
            <li><NavLink to="/Lanzamientos3">Lanzamientos3</NavLink></li>
            
            
          </ul>

       
          
          </div>
         
      

          

          <div  className={top_dash_class}>
       
            
          <div  className={"dash_body"}>

        <div  className={"dash_top"}>
                <div  className={"menu_amburger"}>
                  <View style={styles.menu}>

                  <View style={styles.menu_icon}>
                  <TouchableOpacity onPress={()=>{this.CambiaColor()}} >
                    <IoIosMenu className='top-menu-icons' />
                  </TouchableOpacity>
                  </View>
                  <View style={styles.menu_icon}>
                  <Text>Global Desicion Support</Text>
                  </View>
                  <View style={styles.menu_icon}>
                  <TouchableOpacity onPress={()=>{this.CambiaColor()}} >
                    <IoIosMenu className='top-menu-icons' />
                  </TouchableOpacity>
               
                  </View>


               
             
                  </View>
                </div>
          </div>

          
          <div  className={"dash_body_right"}>

                  <Route path="/GDS" component={Home}/>
                  <Route path="/SellOut" component={SellOut}/>
                  <Route path="/Arbol" component={Arbol}/>
                  <Route path="/Promocion" component={Promocion}/>
                  <Route path="/Lanzamientos" component={Lanzamientos}/>
                  <Route path="/Carpetas" component={Carpetas}/>
                  <Route path="/DashboardOld" component={DashboardOld}/>
                  <Route path="/Lanzamientos2" component={Lanzamientos2}/>
                  <Route path="/Lanzamientos3" component={Lanzamientos3}/>
          </div>
              </div>
          </div>
      </HashRouter>
      </div>

      
    );
  }
}

 
export default Main;


const styles = StyleSheet.create({
   
  menu: {
    flex: 1,
    flexDirection: 'row'

  },
  menu_icon: {
    flex: 1
  }
 
  

});


