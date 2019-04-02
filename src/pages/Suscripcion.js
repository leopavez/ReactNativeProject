/**
 * Proyecto AceMatch
 * Suscripcion.js
 * Descripcion: Script para el formulario de suscripcion a un plan
 * Creado por Leandro Pavez 24/01/18
 * Copyright © 2017 UTIPS SpA. Todos los derechos reservados.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    StatusBar
} from 'react-native';

import { Router, Stack, Scene } from 'react-native-router-flux';
import Formulario1 from '../components/formularios_registro/Formulario1';
import Formulario2 from '../components/formularios_registro/Formulario2';
import Formulario3 from '../components/formularios_registro/Formulario3';

import { Actions } from 'react-native-router-flux';

export default class Suscripcion extends Component<{}> {

    constructor(props) {
        super(props)
        this.state = {
            tipo_plan: ''
        }
    }

    guardarbasico = () => {

        Actions.basico({
            nombre: this.props.nombre,
            apellidopaterno: this.props.apellidopaterno,
            apellidomaterno: this.props.apellidomaterno,
            peso: this.props.peso,
            estatura: this.props.estatura,
            email: this.props.email,
            password: this.props.password,
            rankingnacional: this.props.rankingnacional,
            categoria: this.props.categoria
        })

    }

    guardarcorr = () => {
        Actions.corriente({
            nombre: this.props.nombre,
            apellidopaterno: this.props.apellidopaterno,
            apellidomaterno: this.props.apellidomaterno,
            peso: this.props.peso,
            estatura: this.props.estatura,
            email: this.props.email,
            password: this.props.password,
            rankingnacional: this.props.rankingnacional,
            categoria: this.props.categoria
        })
    }
    render() {
        return (

            <ImageBackground
                source={require('../images/img_registro2.png')}
                style={styles.backimage}>
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor="#000000"
                        barStyle="light-content" />
                    <Text style={styles.textosuscripcion}>Suscripción</Text>
                    <Text style={styles.textos}>¡Elige tu plan!</Text>
                    <TouchableOpacity onPress={() => this.guardarbasico()} style={styles.button}>
                        <Text style={styles.buttonText1}>
                            Plan básico</Text>
                        <Text style={styles.buttonText}> $X Mensual </Text>
                        <Text style={styles.buttonText}>2 Matches mensuales
         </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.guardarcorr()} style={styles.button}>
                        <Text style={styles.buttonText1}>
                            Plan corriente</Text>
                        <Text style={styles.buttonText}> $X Mensual </Text>
                        <Text style={styles.buttonText}>4 Matches mensuales
              </Text>
          </TouchableOpacity>
          <View style={styles.button_next_prev}>
                       
                <TouchableOpacity onPress={() => Actions.register3()} >
                    <View style={[styles.button_next_prev]}>
                    <Text style={styles.button_prev}>Atras</Text>
                    </View>
                </TouchableOpacity>
            </View>
          <View style={styles.signupText}>
            <TouchableOpacity onPress={() => Actions.detalleplan()}><Text style={styles.signupButton}>Ver detalles del plan</Text></TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backimage: {
        flex: 1,
        width: '100%',
        height: '100%'
      },
      textosuscripcion: {
          fontSize: 40,
          fontWeight: 'bold', 
          color: '#ffffff',
          paddingRight: 35,
          paddingTop: 40,
          paddingBottom:30
      },
      button_next_prev: {
        justifyContent : 'center',
        paddingVertical:0,
        paddingBottom: 5, 
        marginVertical: 33,
        flexDirection:'row'
    },
    button_prev :{
        backgroundColor:'transparent',
        color:"#fff",
        fontSize:19,
        borderRadius:25,
        borderWidth: 1,
        borderColor:'#fff',
        width:100,
        textAlign:'center',     
        fontWeight: '500', 
        paddingVertical:9,
        
    },
      signupButton :{
          color:'#0062aa',
          fontSize: 16,
          fontWeight:'500'
      },
        signupText: {
          flexGrow: 1,
          alignItems: 'flex-end',
          justifyContent : 'center',
          paddingVertical:16, 
          flexDirection:'row'
      },
      textos: {
        color: '#ffffff'
    }, button: {
        backgroundColor: '#0062aa',
        borderRadius: 25,
        width: 240,
        height: 130,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 19,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    buttonText1: {
        fontSize: 35,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
});
