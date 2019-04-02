/**
 * Proyecto AceMatch
 * Suscripcion.js
 * Descripcion: Pantalla del perfil de usuario
 * Creado por Leandro Pavez 27/01/18
 * Copyright © 2017 UTIPS SpA. Todos los derechos reservados.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    AppRegistry,
} from 'react-native';

import Menu from '../components/perfil/Menu';

export default class PerfilUsuario extends Component {

    render() {
      var iduser = this.props.idusuario
        return (

            <View style={styles.container}>

            <Text>{iduser}</Text>
                <Menu />
            </View>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }

});

