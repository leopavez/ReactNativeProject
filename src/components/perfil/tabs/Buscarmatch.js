/**
 * Proyecto AceMatch
 * Buscarmatch.js
 * Descripcion: Sección del perfil del usuario para buscar matches disponibles.
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
import { Actions } from 'react-native-router-flux';
import { Router, Stack, Scene } from 'react-native-router-flux';


export default class Buscarmatch extends Component {

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
                        <Text style={styles.textoheader}>Selección de club</Text>
                    </ImageBackground>
                </View>

                <Text style={styles.texto}>¿En qué club quieres jugar?</Text>

                <TouchableOpacity onPress={() => Actions.SeleccionBloqueP()}>
                    <ImageBackground style={styles.canchas} source={require('../img/img_seccionBuscarMatch_seleccionDeClub_ClubPalestino.png')}>
                        <Text style={styles.textocanchas}>Club Palestino</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Actions.SeleccionBloqueS()}>
                    <ImageBackground style={styles.canchas} source={require('../img/img_seccionBuscarMatch_seleccionDeClub_ClubSirioUnido.png')}>
                        <Text style={styles.textocanchas}>Club Sirio Unido </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    textoheader: {
        fontSize: 15,
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
        fontSize: 13,
        alignSelf: 'center',
        padding: 10,
        color: 'black'
    },
    textocanchas: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },

});
