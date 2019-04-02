/**
 * Proyecto AceMatch
 * Formulario3.js
 * Descripcion: Script para el tercer formulario del registro de usuario.
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
    ImageBackground
  } from 'react-native';
  
  import {Actions} from 'react-native-router-flux';

export default class Formulario1 extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      rankingnacional: '',
      categoria: '',
    }
  }

  updateValue(text, field) {
    if (field == "rankingnacional") {
      this.setState({
        rankingnacional: text,
      })
    }
    else if (field == "categoria") {
      this.setState({
        categoria: text
      })
    }
  }

  guardar = () => {

    Actions.suscripcion({
      nombre: this.props.nombre,
      apellidopaterno: this.props.apellidopaterno,
      apellidomaterno: this.props.apellidomaterno,
      sexo: this.props.sexo,
      peso: this.props.peso,
      estatura: this.props.estatura,
      email: this.props.email,
      password: this.props.password,
      rankingnacional: this.state.rankingnacional,
      categoria: this.state.categoria
    })

  }

  render() {

    return (
      <ImageBackground
        source={require('./img_registro1.png')}
        style={styles.backimage}>
        <Text style={styles.textoregistro}>Registro</Text>
        <View style={styles.container}>
          <Text style={styles.textos}>Cuéntanos de tu desempeño...</Text>
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Tu ranking nacional"
            placeholderTextColor="#ffffff"
            onChangeText={(text) => this.updateValue(text, 'rankingnacional')} />
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Tu categoría"
            placeholderTextColor="#ffffff"
            onChangeText={(text) => this.updateValue(text, 'categoria')} />

          <Text style={styles.textos2}> Consiento la transferencia de mis datos personales a AceMatch con el fin de proporcionar servicios tal y como se describe en la
             Política de Privacidad y en los Términos y Condiciones. Puedo retirar mi consentimiento en cualquier momento.</Text>
              
                
                <TouchableOpacity  onPress={() => Actions.suscripcion()} style={styles.button}>
                    <Text style={styles.buttonText}>Suscripción</Text>
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
      container : {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent : 'center'
      },
      inputBox:{
        width:300,   
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10       
      },
      button :{
        backgroundColor:'#0062aa',
        borderRadius:25,
        width:120,   
        marginVertical:10,       
        paddingVertical:12
      },
      buttonText: {
          fontSize:16,
          fontWeight: '500',
          color:'#ffffff',
          textAlign:'center'
      },
      textos: {
        color: '#ffffff',
        paddingRight: 100
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
    enlaces :{
        color:'#0062aa',
        fontSize: 16,
        fontWeight:'500'
    },
    textos2: {
      color: '#ffffff',
      fontSize: 15,
      textAlign: 'center',
      justifyContent:'center'
    }
    });
