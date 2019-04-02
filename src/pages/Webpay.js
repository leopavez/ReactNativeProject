/*
 Proyecto AceMatch
 Webpay.js
 Descripcion: Script para el formulario de suscripcion a un plan
 Creado por Camilo Zepeda 05/04/2018
 Copyright © 2017 UTIPS SpA. Todos los derechos reservados.
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

import {Router, Stack, Scene,ButtonGroup} from 'react-native-router-flux';
import Webpay_controller from '../components/webpay_components/webpay_controller';
//import PulseLoader from 'react-native-pulse-loader';
/*import Suscripcion1 from '../components/formularios_suscripcion/Suscripcion1';*/
import {Actions} from 'react-native-router-flux';


export default class Webpay extends Component<{}> {
    
        
    render(){
        return(
            <ImageBackground
                source={require('../images/img_registro1.png')}
                style= {styles.backimage}>
                <View style={styles.container}>
                    <StatusBar
                    backgroundColor="#000000"
                    barStyle="light-content" />
                    <Text style={styles.webpay_encabezado}>Webpay</Text>
                    <Webpay_controller/>
                   
                    <View style={styles.button_next_prev}>
                       
                        <TouchableOpacity onPress={() => Actions.pop()} >
                            <View style={[styles.button_next_prev]}>
                            <Text style={styles.button_prev}>Atras</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent : 'center'
    }, 
    contenedor_button: {
        alignItems: 'center',
        padding: 10
    },
    backimage: {
        width: '100%',
        height: '100%'
    },
    webpay_encabezado: {
        fontSize: 40,
        fontWeight: 'bold', 
        color: '#ffffff',
        textAlign:'center'
          
    },
    button_next_prev: {
        justifyContent : 'center',
        paddingVertical:0,
        paddingBottom: 5, 
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
});