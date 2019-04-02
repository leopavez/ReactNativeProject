/**
 * Proyecto AceMatch
 * Suscripcion.js
 * Descripcion: Pantalla del perfil de usuario
 * Creado por Leandro Pavez 28/01/18
 * Copyright © 2017 UTIPS SpA. Todos los derechos reservados.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AppRegistry,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';



export default class Central extends Component {

    render() {
        return (
            <View style={StyleSheet.container}>

                <TouchableOpacity>
                    <Image style={styles.estadisticas}
                        source={require('../perfil/img/img_seccionYoMiNivel.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.estadisticas}
                        source={require('../perfil/img/img_seccionYoJugados.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.estadisticas}
                        source={require('../perfil/img/img_seccionYoGanados.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.estadicas} sti
                        source={require('../perfil/img/img_seccionYoPerdidos.png')}>
                    </Image>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    estadisticas: {

        flex: 1,
        height: 100,
        width: 100,

    }

});

