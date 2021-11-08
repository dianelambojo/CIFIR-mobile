import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SplashComponent extends React.Component {
    render(){
        return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                source={require('../assets/CIFIR_Logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <LinearGradient
                colors={['#E2454F', '#ED8854']}
                style={styles.footer}
                >
                <Animatable.View 
                animation="fadeInUpBig">
                    <Text style={styles.title}>Read EPUB and PDF files on the go!</Text>
                    <Text style={styles.text}>Sign in with account</Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#FFF', '#E7E7E7']}
                            style={styles.signIn}
                        >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#E2454F"
                            size={20}
                        />
                        </LinearGradient>
                        </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </LinearGradient>
        </View>


        )
        
    }
};


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
        color: '#F0A097',
        marginTop:5,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: '#E2454F',
        fontWeight: 'bold'
    }


  });



