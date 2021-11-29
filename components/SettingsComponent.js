import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



export default class SettingsComponent extends React.Component {
    render(){
        return (
            // <View style={styles.container}>
            //     <Text> Account Settings </Text>
            //         <View style={styles.passwordContainer}>
            //             <Text> Password </Text>        
            //             <TextInput placeholder="Your password" style={styles.textInput}/>
            //         </View>
            // </View>
            <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={require('../assets/icon.png')}/>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text>Change Password</Text>  
                </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    // passwordContainer:{
    //     marginTop: 35,
    //     marginLeft: 35,
    // }
    header:{
    backgroundColor: "#E2454F",
    height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
    },
    info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
    },
});