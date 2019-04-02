
// Proyecto AceMatch
// webpay_controller.js
// Creado por Camilo Zepeda 14/04/2018
// Copyright © 2017 UTIPS SpA. Todos los derechos reservados.


// Dependencias Bibliotecas 
import React, { Component } from 'react';

import {Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  WebView,
  Modal} from 'react-native';



            
// Visualización y controlador de Webpay Page
export default class webpay_controller extends Component<{}> {
    state = {
        animated:  new Animated.Value(0),
        opacityA: new Animated.Value(1),
        animated2:  new Animated.Value(0),
        opacityA2: new Animated.Value(1),
        modalVisible: false,
        url:'https://github.com/facebook/react-native'
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    componentDidMount(){
      const {animated , opacityA,animated2 , opacityA2 } = this.state;
      Animated.stagger(1000,[
        Animated.loop(
          Animated.parallel([
            Animated.timing(animated,{
              toValue:1,
              duration:2000,
            }),
            Animated.timing(opacityA,{
              toValue:0,
              duration:2000,
            })
          ])
          
        ),
        Animated.loop(
          Animated.parallel([
            Animated.timing(animated2,{
              toValue:1,
              duration:2000,
            }),
            Animated.timing(opacityA2,{
              toValue:0,
              duration:2000,
            })
          ])
          
        )

      ]).start()
    }
    
    
    render() {
      const {animated , opacityA,animated2 , opacityA2 } = this.state;
      return (
        <View style={styles.center}>
          <Modal animationType = {"slide"} transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>
            <View style = {styles.modal}>
              
                <WebView
                  source={{uri: this.state.url}}
                  style={{width:380,height:340}}
                />
                <TouchableOpacity  onPress = {() => {
                    this.toggleModal(!this.state.modalVisible)}} style={styles.closewindow}>
                    <Text style = {styles.closetext}>Cerrar</Text>
                </TouchableOpacity>
              
              
            </View>
          </Modal>
          <Animated.View
          style={{
            width:225,
            height:225,
            borderRadius:130,
            backgroundColor:'#fff',
            opacity:opacityA,
            borderColor:'#fff',
            borderWidth:2,
            position: 'absolute',
            marginVertical:74,
            marginLeft:46,
            transform:[
              {
                scale:animated
              }
            ]
          }}>
          <Animated.View
          style={{
            width:225,
            height:225,
            borderRadius:130,
            backgroundColor:'#fff',
            opacity:opacityA2,
            position: 'absolute',
            borderColor:'#fff',
            borderWidth:1,
            transform:[
              {
                scale:animated2
              }
            ]
          }}>
          </Animated.View>
          </Animated.View>
          <TouchableOpacity  onPress = {() => {this.toggleModal(true)}}>
          <View style={ styles.circle } >
              { this.state.showWebView && this.renderContent() }
              <View style={ styles.imageContainer }  onPress={() => this.setState({showWebView: true})}>
                <Image style={ styles.image } source={require('../../images/img_webpay.png') } />
              </View>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

// Estilo de Webpay Front
const styles = StyleSheet.create({
    textos: {
        fontSize: 15,
        textAlign: 'center', 
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign:'center'  
    },
    circle:{
      height:215,
      width: 215,
      marginLeft:18,
      backgroundColor:"transparent",
      borderRadius:120,
      marginVertical:77
    },
    closewindow:{
      backgroundColor:'#0062aa',
      borderRadius: 25,
      paddingVertical: 12,
      marginVertical: 12,
      width: 120,
    },
    closetext: {
      color:'#ffffff',
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center'
    },
    imageContainer: {
      height:200,
      width: 200,
      marginRight:41,
      backgroundColor:"#cdd6dfdb",
      borderColor:"#9aa6b2ab",
      borderWidth: 3,
      borderRadius:100,
      marginVertical:6.8
    },
    image: {
      height:90,
      width: 190,
      marginVertical:50,
      marginLeft:5
    },
    modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#d4ddd6b0',
      padding: 10
    },
    center: { 
      alignItems: 'center',
      flexDirection:'column',
      flex:1,
    }
  });