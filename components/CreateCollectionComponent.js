import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import AsyncStorage  from '@react-native-async-storage/async-storage';
export const CreateCollectionComponent = () =>  {

    const [name, setName] = useState("")
    //const [id, setID] = useState("")


    // const getID = async() => {
    //     const userToken = await AsyncStorage.getItem('userToken');
    //     fetch('http://192.168.1.6:8000/api/loggedin', {
    //         method: "GET",
    //         headers: {
    //             'Authorization': 'Token ' + userToken
    //         }
    //     })

    //     .then(res => res.json())
    //     .then(data => {
    //         setID(data.id)
    //     })
    //     .catch(error => console.log("error"))
        
    // }
    
    const insertData = async() => {
        const userToken = await AsyncStorage.getItem('userToken');
       
         //const userid = parseInt(getID());
        // console.log(userid);
        // console.log(name);


        fetch('http://192.168.1.15/api/collections/', {
            method: "POST",
            headers: {
                'Authorization': 'Token ' + userToken,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name:name})
        })

        .then(res => res.json())
        .then(data => {
            
            console.log(data)
        })
        .catch(error => console.log("error"))
    }

        return (
            
            <View style={styles.inputStyle}>
                <TextInput 
                label ="Collection Name"
                value = {name}
                mode = 'outlined'
                theme={{ colors: { primary: '#ED8854',underlineColor:'transparent',}}}
                
                onChangeText = {text => setName(text)} > 
                
                </TextInput>

                <Button style={styles.containerbutton}
                icon = "pencil"
                mode = "contained"
                onPress = {() => insertData()}
                >

                Create Collection
                </Button>
            </View>
        )
    }


export default CreateCollectionComponent;

var styles = StyleSheet.create({
    inputStyle: {
      padding: 20,
      marginTop:50,
      
    },
    containerbutton:{
        backgroundColor: '#E2454F',
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});