import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Button,
    TouchableHighlight,
    Icon,
    ScrollView
} from 'react-native';

import TabNavigator from 'react-navigation';
import Menu from '../Menu';



export default class Seleccionbloquesirio1 extends Component {

    static navigationOptions = {
        tabBarLabel: 'Yo',
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
                    <ImageBackground style={styles.header} source={require('../img/img_fondoSeccionMisMatches.png')}>
                        <Text style={this.idusuariologin}></Text>
                    </ImageBackground>
                </View>

                <ScrollView>

                    <View style={styles.cont}>
                        <Image style={styles.secciones} source={require('../img/img_seccionYoMiNivel.png')}></Image>
                        <Text style={styles.textonivel}>Mi Nivel</Text>
                    </View>

                    <View style={styles.cont}>
                        <Image style={styles.secciones} source={require('../img/img_seccionYoJugados.png')}></Image>
                        <Text style={styles.textonivel}>Jugados</Text>
                    </View>

                    <View style={styles.cont}>
                        <Image style={styles.secciones} source={require('../img/img_seccionYoGanados.png')}></Image>
                        <Text style={styles.textonivel}>Ganados</Text>
                    </View>

                    <View style={styles.cont}>
                        <Image style={styles.secciones} source={require('../img/img_seccionYoPerdidos.png')}></Image>
                        <Text style={styles.textonivel}>Perdidos</Text>
                    </View>
                </ScrollView>


            </View>
        );
    }
}



const styles = StyleSheet.create({
    nombreusuario: {
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98d2c1'
    },
    secciones: {
        paddingTop: 30,
        marginTop: 40,
        marginLeft: 30,
        width: 130,
        height: 130,
        borderRadius: 25,
        justifyContent: 'center'
    },
    cont: {
        flex: 1,
        flexDirection: 'row'
    },
    textonivel: {
        fontWeight: 'bold',
        paddingTop: 55,
        fontSize: 20,
        marginTop: 40,
        paddingLeft: 60,
    },
    textojugados: {
        fontWeight: 'bold',
        paddingLeft: 135,
    },
    textoganados: {
        fontWeight: 'bold',
        paddingLeft: 60,
    },
    textoperdidos: {
        fontWeight: 'bold',
        paddingLeft: 135,
    }
});
