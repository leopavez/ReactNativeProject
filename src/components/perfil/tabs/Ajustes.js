/**
 * Proyecto AceMatch
 * Ajustes.js
 * Descripcion: Sección de ajustes del perfil de usuario.
 * Creado por Leandro Pavez 10/04/18
 * Copyright © 2018 UTIPS SpA. Todos los derechos reservados.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import TabNavigator from 'react-navigation';

export default class Ajustes extends Component {

    static navigationOptions = {
        tabBarLabel: 'Ajustes',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../img/icono_seccionAjustes.png')}
                style={{ width: 10, height: 10, tintColor: 'while' }}
            ></Image>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Ajustes</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});