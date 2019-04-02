/**
 * Proyecto AceMatch
 * InicioSesion.js
 * Descripcion: Formulario para inciar sesion
 * Creado por Leandro Pavez 15/01/18
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
  Platform,
  ListView,
  AsyncStorage
} from 'react-native';

/**
 * Importamos el componente Logo.js y exportamos el InicioSesion
 */
import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';
import Menu from '../components/perfil/Menu';
import Login from '../pages/Login';
import { StackNavigator } from 'react-navigation';
export default class InicioSesion extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  updateValue(text, field) {
    if (field == "email") {
      this.setState({
        email: text,
      })
    }
    else if (field == "password") {
      this.setState({
        password: text
      })
    }
  };

  submit = () => {
    fetch('http://localhost/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then((response) => response.json())
      .then((response => {
        if (response.message == "Oh! ha ocurrido un error inesperado") {
          alert(response.message);
          Actions.login()
        } else if (response.message == "Usuario invalido") {
          alert(response.message);
          Actions.login()
        } else {
          var idusuario = response.datosusuario;
          alert("Bienvenido");
          Actions.perfiluser({ idusuario });
        }
      }))
      .done();

  }
  render() {
    return (

      //Formulario para el inicio de sesion


      <View style={styles.container}>
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => this.updateValue(text, 'email')} />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          onChangeText={(text) => this.updateValue(text, 'password')} />

        <TouchableOpacity onPress={() => this.submit()} style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>

      </View>


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
    paddingVertical: 12,
    marginTop: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
});
