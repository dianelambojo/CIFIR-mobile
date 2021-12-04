import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class SendFeedbackComponent extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.texttitle}> Feedback </Text>
                <Text style={styles.textbody}>Please send us suggestions about our products. We welcome problem reports, feature ideas and general comments </Text>
                <Text style={styles.textmessage}> Message: </Text>
                <TextInput
                    style={styles.postInput}
                    onChangeText={text=> setInput({...input, body:text})}
                    multiline={true}
                    numberOfLines={5}
                    placeholder=" Send us a feedback...."
                    underlineColorAndroid='transparent'
                    require={true}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text>Send</Text>  
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        marginLeft: 80,
        width:250,
        borderRadius:30,
        color:'white',
        backgroundColor: "#e5e5e5",
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:250,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    postInput:{
        fontSize: 24,
        borderColor:'#42435b',
        borderWidth:1,
        margin:10,
        fontFamily: "Outrun future"
    },
    texttitle:{
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 5,
        marginBottom: 5,
        color: '#1B2F4B'
    },
    textbody:{
        textAlign:'justify',
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        color: '#1B2F4B'
    },
    textmessage:{
        fontSize: 16,
        marginLeft: 10,
        color: '#1B2F4B'
    },
});
