/**
 * Proyecto AceMatch
 * Registro.js
 * Descripcion: Script para la ventana formulario del registro de usuario.
 * Creado por Leandro Pavez 20/01/18
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
    TouchableOpacity,
    ImageBackground
} from 'react-native';

/**
 * Importamos el componente Logo.js y InicioSesion y exportamos el Login
 */

import Formulario1 from '../components/formularios_registro/Formulario1';
import Formulario2 from '../components/formularios_registro/Formulario2';
import Formulario3 from '../components/formularios_registro/Formulario3';
import { Actions } from 'react-native-router-flux';



export default class Registro extends Component<{}> {


    render() {
        return (
            <ImageBackground
                source={require('../images/img_registro1.png')}
                style={styles.backimage}>
                <View style={styles.container}>
                    <Text style={styles.textoregistro}>Registro</Text>
                    <Formulario1 type="Registrarse" />
                    <View style={styles.signupText}>
                        <Text style={styles.signupText2}>¿Ya tienes una cuenta?</Text>
                        <TouchableOpacity onPress={() => Actions.login()} ><Text style={styles.signupButton}>¡Inicia Sesion!</Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )

    }

}

/**
 * Definimos CSS
 */
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent : 'center'
      },
  
      signupText: {
          flexGrow: 1,
          alignItems: 'flex-end',
          justifyContent : 'center',
          paddingVertical:0, 
          flexDirection:'row'
      },
      signupText2: {
          color:'rgba(255,255,255,0.7)',
          fontSize:16
  
      },
      signupButton :{
          color:'#0062aa',
          fontSize: 16,
          fontWeight:'500',
          paddingLeft: 10,
      },
      textoregistro: {
          fontSize: 40,
          fontWeight: 'bold', 
          color: '#ffffff',
          paddingRight: 125,
          paddingTop: 40,
          paddingBottom:30
      },
      backimage: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});
