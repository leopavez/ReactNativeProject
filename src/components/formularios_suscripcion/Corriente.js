/**
 * Proyecto AceMatch
 * Corriente.js
 * Descripcion: Seleccion de plan corriente, acceso a webpay
 * Creado por Leandro Pavez 25/01/18
 * Copyright © 2017 UTIPS SpA. Todos los derechos reservados.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Formulario1 extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            tipo_plan: "corriente"
        }

    }

    submit = () => {
        fetch('http://localhost/api/usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: this.props.nombre,
                apellidopaterno: this.props.apellidopaterno,
                apellidomaterno: this.props.apellidomaterno,
                sexo: this.props.sexo,
                peso: this.props.peso,
                estatura: this.props.estatura,
                email: this.props.email,
                password: this.props.password,
                rankingnacional: this.props.rankingnacional,
                categoria: this.props.categoria,
                tipo_plan: this.state.tipo_plan

            })
        })
            .then((response) => response.json())
            .then((response => {
                alert(response)
                Actions.login();
            }))
            .done();
    }



    render() {
        return (

            <ImageBackground
                source={require('../formularios_suscripcion/img_registro1.png')}
                style={styles.backimage}>
                <View style={styles.container}>
                    <Text style={styles.textos}>Has seleccionado el Plan corriente, el cual tiene un valor
          de $X mensual.</Text>

                    <Text style={styles.textos}>Detalle de suscripcion a AceMatch.</Text>

                    <Text style={styles.textos}>Las suscripciones a AceMatch adquiridas a traves de la
          aplicacion movil se cobraran a traves de WebPay.</Text>

                    <Text style={styles.textos}>Puedes cancelar o administrar tu suscripcion en los ajustes
                    de tu cuenta de App Store. Tu suscripcion de pago sera con renovacion automatica de manera
                    mensual a no ser que canceles tu suscripcion con al menos 24 horas de antelacion a tu proxima
          fecha de renovacion.</Text>

                    <Text style={styles.textos}>Al suscribirte a AceMatch, confirmas y aceptas los terminos y condiciones
          de suscripcion. Consulta nuestras Politicas de privacidad.</Text>

                    <View style={styles.button_next_prev}>
                        <TouchableOpacity onPress={() => Actions.pop()} >
                            <View style={[styles.contenedor_button]}>
                            <Text style={styles.button_prev}>Atras</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => Actions.suscribirsefinal()} >
                            <View style={[styles.contenedor_button]}>
                            <Text style={styles.button_next}>Suscribirse</Text>
                            </View>
                        </TouchableOpacity>
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
    contenedor_button: {
        alignItems: 'center',
        padding: 10
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
    button_next :{
        backgroundColor:'#0062aa',
        color:"#fff",
        fontSize:19,
        borderRadius:25,
        width:120,
        textAlign:'center',     
        fontWeight: '500', 
        paddingVertical:9,
        
        
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
    textos: {
        fontSize: 15,
        textAlign: 'center',
        color: '#ffffff',
        marginVertical: 20,
        paddingHorizontal: 30
    },
    backimage: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});