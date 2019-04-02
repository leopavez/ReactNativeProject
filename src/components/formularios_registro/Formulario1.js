/**
 * Proyecto AceMatch
 * Formulario1.js
 * Descripcion: Script para el primer formulario del registro de usuario.
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

import DateTimePicker from 'react-native-modal-datetime-picker';
import { Actions } from 'react-native-router-flux';
import Formulario2 from './Formulario2';


export default class Formulario1 extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      nombre: '',
      apellidopaterno: '',
      apellidomaterno: '',
      fechanacimiento: '',
      sexo: ''
    }
  }

  handlePicker = () => {
    this.setState({
      isVisible: false
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,
      fechanacimiento: ''
    })
  }

  showpicker = () => {
    this.setState({
      isVisible: true
    })
  }

  updateValue(text, field) {
    if (field == "nombre") {
      this.setState({
        nombre: text,
      })
    }
    else if (field == "apellidopaterno") {
      this.setState({
        apellidopaterno: text
      })
    } else if (field == "apellidomaterno") {
      this.setState({
        apellidomaterno: text
      })
    }
  }

  guardar = () => {
    sexo = this.state.sexo;
    if (this.state.nombre == "" || this.state.apellidopaterno == "" || this.state.apellidomaterno == "") {
      alert("Debes llenar todos los campos")
    } else if (this.state.sexo == "") {
      alert("Selecciona un sexo valido")
    } else {
      Actions.register2({
        nombre: this.state.nombre, apellidopaterno: this.state.apellidopaterno,
        apellidomaterno: this.state.apellidomaterno, sexo: this.state.sexo
      })
    }
  }




  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.textos}>¿Cómo te llamas?</Text>
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Tu Nombre"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => this.updateValue(text, 'nombre')} />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Apellido paterno"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => this.updateValue(text, 'apellidopaterno')} />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Apellido materno"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => this.updateValue(text, 'apellidomaterno')} />
        <Text style={styles.textos}>¿Cuándo naciste?</Text>
        <TouchableOpacity onPress={this.showpicker} style={styles.buttonfecha}>
          <Text style={styles.buttonText2}>Tu fecha de nac.</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
        />
        <Text style={styles.textos2}>¿Eres?</Text>
        <Picker style={styles.inputBox2} underlineColorAndroid='rgba(0,0,0,0)'
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}>
          <Picker.Item label="Tu sexo" value="" />
          <Picker.Item label="Hombre" value="Hombre" />
          <Picker.Item label="Mujer" value="Mujer" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
        <TouchableOpacity onPress={() => this.guardar()} style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
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
  buttonfecha: {
    width: 300,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
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
  buttonText2: {
    fontSize: 16,
    paddingTop: 10,
    color: '#ffffff',
    textAlign: 'left'
  },
  textos: {
    color: '#ffffff',
    paddingRight: 170,
  },
  textos2: {
    color: '#ffffff',
    paddingRight: 230,
  },
  backimage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  textoregistro: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingRight: 125,
    paddingTop: 40,
    paddingBottom: 30
  },
  inputBox2: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    color: '#ffffff',
    marginVertical: 10
  },
});
