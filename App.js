/**
 * Proyecto AceMatch
 * App.js
 * Descripcion: Script de la ventana principal del proyecto donde se incluye el Routes para realizar la navegacion entre pestañas
 * Creado por Leandro Pavez 17/01/18
 * Copyright © 2017 UTIPS SpA. Todos los derechos reservados.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  ImageBackground
} from 'react-native';


//Stack navigator importado para ser utilizado en el perfil del usuario
import { StackNavigator } from 'react-navigation';

/**
 * Importamos todas las pantallas de la aplicacion
 * Para poder enlazarlas con la funcionalidad Action de Router-Flux
 */
import Login from './src/pages/Login';
import Registro from './src/pages/Registro';
import Suscripcion from './src/pages/Suscripcion';
import Webpay from './src/pages/Webpay';
import Perfil from './src/pages/Perfil';

import {Actions} from 'react-native-router-flux';
//import PulseLoader from 'react-native-pulse-loader';
import{Router, Stack, Scene} from 'react-native-router-flux';
import Formulario2 from './src/components/formularios_registro/Formulario2';
import Formulario3 from './src/components/formularios_registro/Formulario3';
import Basico from './src/components/formularios_suscripcion/Basico';
import Corriente from './src/components/formularios_suscripcion/Corriente';
import Detalleplan from './src/components/formularios_suscripcion/Detalleplan';
import Header from './src/components/perfil/Header';
import Buscarmatch from './src/components/perfil/tabs/Buscarmatch';
import SeleccionBloquePalestino from './src/components/perfil/tabs/SeleccionBloquePalestino';
import SeleccionBloqueSirio from './src/components/perfil/tabs/SeleccionBloqueSirio';


export default class App extends Component<{}> {

  //Router de las pantallas para ser reconocidas por el Actions a traves de su key
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="register" component={Registro} title="Register" />
          <Scene key="register2" component={Formulario2} tittle="Register" />
          <Scene key="register3" component={Formulario3} tittle="Register" />
          <Scene key="suscripcion" component={Suscripcion} tittle="Suscripcion" />
          <Scene key="basico" component={Basico} tittle="Basico" />
          <Scene key="corriente" component={Corriente} title="Corriente" />
          <Scene key="detalleplan" component={Detalleplan} tittle="Detalle" />
          <Scene key="suscribirsefinal" component={Webpay} tittle="Pago" />
          <Scene key="perfiluser" component={Perfil} tittle="Perfil" />
          <Scene key="buscarm" component={Buscarmatch} tittle="BuscarMatch" />
          <Scene key="SeleccionBloqueP" component={SeleccionBloquePalestino} title="Bloque Palestino"/>
          <Scene key="SeleccionBloqueS" component={SeleccionBloqueSirio} title="Bloque Sirio"/>
        </Stack>
      </Router>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  backimage: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
