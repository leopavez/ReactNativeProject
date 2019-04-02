/**
 * Proyecto AceMatch
 * Mismatches.js
 * Descripcion: Sección del perfil de usuario en donde se muestran todos los matches cerrados (Agendados)
 * en el cual participara el usuario
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
    TouchableOpacity,
    ListView,
    FlatList,
    ActivityIndicator
} from 'react-native';

import TabNavigator from 'react-navigation';
import Menu from '../Menu';
import Time from 'react-time-format';
import { List, ListItem } from 'react-native-elements';
import moment from 'moment';


export default class Mismatches extends Component {

    static navigationOptions = {
        tabBarLabel: 'Mis matches',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../img/icono_seccionBuscarMatch.png')}
                style={{ width: 22, height: 22, tintColor: 'while' }}
            ></Image>
        )
    }

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('http://localhost/api/matches')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <ImageBackground style={styles.header} source={require('../img/img_fondoSeccionBuscarMatch.png')}>
                        <Text style={styles.textoheader}>Agenda de matches</Text>
                    </ImageBackground>
                </View>
                <List style={styles.scene} >
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.fecha}
                                subtitle={`${item.club} / Bloque ${item.bloque}`}
                            />
                        )}
                        keyExtractor={(item, index) => index}
                    />
                </List>
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
        height: '24%',
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
    fecha: {
        paddingTop: 20,
        fontSize: 13,
        fontWeight: 'bold',
        color: 'blue'
    }

});
