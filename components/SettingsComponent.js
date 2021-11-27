import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



export default class SettingsComponent extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> Account Settings </Text>
                    <View style={styles.passwordContainer}>
                        <Text> Password </Text>        
                        <TextInput placeholder="Your password" style={styles.textInput}/>
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
    passwordContainer:{
        marginTop: 35,
        marginLeft: 35,
    }
});