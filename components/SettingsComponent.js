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
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                            placeholder="Password"
                            underlineColorAndroid='transparent'
                            // onChangeText={(email) => this.setState({email})}
                            />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                            placeholder="New Password"
                            underlineColorAndroid='transparent'
                            // onChangeText={(email) => this.setState({email})}
                            />
                </View>
                
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
        color:'white',
        backgroundColor: "#B6B8B6",
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',

        shadowColor: "#808080",
        shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
});