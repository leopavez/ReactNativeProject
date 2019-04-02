/**
 * Proyecto AceMatch
 * SeleccionBloqueSirio.js
 * Descripcion: Pantalla para la seleccion de un bloque (Horario) correspondiente al Club Sirio Unido
 * Creado por Leandro Pavez 10/04/18
 * Copyright © 2018 UTIPS SpA. Todos los derechos reservados.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import TabNavigator from 'react-navigation';
import Menu from '../Menu';




export default class SeleccionBloquePalestino extends Component {



    static navigationOptions = {
        tabBarLabel: 'Buscar Match',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../img/icono_seccionBuscarMatch.png')}
                style={{ width: 22, height: 22, tintColor: 'while' }}
            ></Image>
        )
    }

    

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.top}>
                    <ImageBackground style={styles.header} source={require('../img/img_fondoSeccionBuscarMatch.png')}>
                        <Text style={styles.textoheader}>Selección de bloque</Text>
                    </ImageBackground>
                </View>

                <Text style={styles.texto}>Selecciona tu bloque</Text>

            </View>

        );
    }
}



const styles = StyleSheet.create({
    textoheader: {
        fontSize: 17,
        paddingLeft: 20,
        paddingTop: 45,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    header: {
        height: '100%',
        width: '100%'
    },
    container: {
        flex: 1
    },
    top: {
        height: '18%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98d2c1'
    },
    textoimagen: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    canchas: {
        borderRadius: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 260,
        height: 150,
        marginVertical: 10,
        paddingVertical: 12
    },
    texto: {
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
        color: 'black'
    }

});
