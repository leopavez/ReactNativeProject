/**
 * Proyecto AceMatch
 * Suscripcion1.js
 * Descripcion: Formulario de suscripcion
 * Creado por Leandro Pavez 25/01/18
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

import { Actions } from 'react-native-router-flux';

export default class Formulario1 extends Component<{}> {
    render() {
        return (

            <ImageBackground
                source={require('../formularios_suscripcion/img_registro1.png')}
                style={styles.backimage}>
                <View style={styles.container}>
                    <Text style={styles.textos}>Plan básico</Text>

                    <Text style={styles.textos1}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa</Text>

                    <Text style={styles.textos}>Plan corriente</Text>

                    <Text style={styles.textos1}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa</Text>


                    <TouchableOpacity onPress={() => Actions.pop()} style={styles.button}>
                        <Text style={styles.buttonText}>Atras</Text>
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
        width: 100,
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
    textos: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        marginVertical: 20,
        paddingHorizontal: 30
    },
    backimage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    textos1: {
        fontSize: 15,
        textAlign: 'center',
        color: '#ffffff',
        marginVertical: 20,
        paddingHorizontal: 30
    },
});
