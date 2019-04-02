/**
 * Proyecto AceMatch
 * Suscripcion.js
 * Descripcion: Menu perfil del usuario.
 * Creado por Leandro Pavez 31/01/18
 * Copyright © 2018 UTIPS SpA. Todos los derechos reservados.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AppRegistry,
    AppTabNavigator,
    Text
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Buscarmatch from './tabs/Buscarmatch';
import Mismatches from './tabs/Mismatches';
import Yo from './tabs/Yo';
import Ajustes from './tabs/Ajustes';
import Header from './Header';

var MenuScreenNavigator = TabNavigator({
    Buscarmatch: { screen: Buscarmatch},
    Mismatches: { screen: Mismatches },
    Yo: { screen: Yo },
    Ajustes: { screen: Ajustes }
}, {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'grey',
            inactiveBackgroundColor: 'black',
            tabBarColor: 'white',
            labelStyle: {
                fontSize: 7,
                padding: 0,
                color: 'black'

            },
            style: {
                backgroundColor: 'white',
                borderTopWidth: 1,
                borderTopColor: 'black',
            }
        }
    });


MenuScreenNavigator.navigationOptions = {
    title: "Perfil"
};

export default MenuScreenNavigator;




const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    }

});
