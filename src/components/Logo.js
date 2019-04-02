/**
 * En este archivo se encuentra el codigo para la vizualizacion
 * del logo de AceMatch
 */

/**
 * Importamos los componenetes de React Native
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/**
 * Exportamos la clase
 */
export default class Logo extends Component<{}> {
    render() {
        return (
            <View>
                <Image style={{ width: 240, height: 150 }}
                    source={require('../images/img_logoAppEnNegro.png')} />
            </View>
        )
    }

}

/**
 * Definimos el CSS
 */

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    }
});
