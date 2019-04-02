/**
 * Proyecto AceMatch
 * Formulario2.js
 * Descripcion: Script para el segundo formulario del registro de usuario.
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
  DatePickerAndroid,
  Picker,
  ImageBackground,
  AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Formulario3 from './Formulario3';
export default class Formulario2 extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      peso: '',
      estatura: '',
      email: '',
    }
  }



  updateValue(text, field) {
    if (field == "peso") {
      this.setState({
        peso: text,
      })
    }
    else if (field == "estatura") {
      this.setState({
        estatura: text
      })
    } else if (field == "email") {
      this.setState({
        email: text
      })
    } else if (field == "password") {
      this.setState({
        password: text
      })
    } else if (field == "confirmpass") {
      this.setState({
        confirmpass: text
      })
    }
  }
  guardar = () => {

    Actions.register3({
      nombre: this.props.nombre,
      apellidopaterno: this.props.apellidopaterno,
      apellidomaterno: this.props.apellidomaterno,
      sexo: this.props.sexo,
      peso: this.state.peso,
      estatura: this.state.estatura,
      email: this.state.email,
      password: this.state.password
    })



  }
  render() {
    return (



      <ImageBackground
        source={require('./img_registro1.png')}
        style={styles.backimage}>

        <Text style={styles.textoregistro}>Registro</Text>


        <View style={styles.container}>



          <Text style={styles.textos}>¿Cuánto pesas?</Text>
          <TextInput keyboardType='numeric' style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Tu peso en KG"
            placeholderTextColor="#ffffff"
            onChangeText={(text) => this.updateValue(text, 'peso')} />
          <Text style={styles.textos}>¿Cuánto mides?</Text>
          <TextInput keyboardType='numeric' style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Tu estatura en cm"
            placeholderTextColor="#ffffff"
            onChangeText={(text) => this.updateValue(text, 'estatura')} />
          <Text style={styles.textos}>¿Cuál es tu email?</Text>
          <TextInput keyboardType='email-address' style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Tu email"
            placeholderTextColor="#ffffff"
            onChangeText={(text) => this.updateValue(text, 'email')} />
          <Text style={styles.textos}>¿Tu password?</Text>
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(text) => this.updateValue(text, 'password')} />
          <Text style={styles.textos}>Repite tu password</Text>
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Repite tu Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(text) => this.updateValue(text, 'confirmpass')} />

          <TouchableOpacity onPress={() => this.guardar()} style={styles.button}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
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
    justifyContent: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    backgroundColor: '#0062aa',
    borderRadius: 25,
    width: 120,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  textos: {
    color: '#ffffff',
    paddingRight: 170
  },
  backimage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  textoregistro: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  textoregistro: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingRight: 125,
    paddingTop: 40,
    paddingBottom: 30
  }
});
