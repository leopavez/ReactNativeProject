/**
 * Proyecto AceMatch
 * Login.js
 * Descripcion: Ventana del inicio de sesion
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
    ImageBackground
} from 'react-native';

import Logo from '../components/Logo';
import InicioSesion from '../components/InicioSesion';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Registro from '../pages/Registro';



import { Actions } from 'react-native-router-flux';

export default class Login extends Component<{}> {


    render() {
        return (
            <ImageBackground
                source={require('../images/img_portadaGeneral.png')}
                style={styles.backimage}>
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor="#000000"
                        barStyle="light-content" />
                    <Logo />
                    <InicioSesion type="Entrar" />
                    <View style={styles.signupText}>
                        <Text style={styles.signupText2}>¿Nuevo?</Text>
                        <TouchableOpacity onPress={() => Actions.register()}><Text style={styles.signupButton}>¡Registrate!</Text></TouchableOpacity>

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

    signupText: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText2: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16

    },
    signupButton: {
        color: '#0062aa',
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 10
    },
    backimage: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 50,
    }
});
