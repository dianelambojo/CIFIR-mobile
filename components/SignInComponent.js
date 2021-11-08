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
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from './context';

const SignInComponent = () => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        // isValidUser: true,
        // isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (value) => {
        if(value.length!==0){
            setData({
                ...data,
                username: value,
                check_textInputChange: true
            });
        }

        else{
            setData({
                ...data,
                username: value,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (username, password) => {
        signIn(username,password);
    }
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Animatable.View 
                    animation="fadeInUpBig" style={styles.footer}>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="black"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Your email"
                            style={styles.textInput}
                            onChangeText={(text) => textInputChange(text)}
                        />
                        {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn" >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="black"
                            size={20}
                        />
                        {data.secureTextEntry ?
                        <TextInput 
                            placeholder="Your password"
                            secureTextEntry={data.secureTextEntry ? true: false }
                            style={styles.textInput}
                            onChangeText={(text) => handlePasswordChange(text)}

                        />
                        :
                        <TextInput 
                            placeholder="Your password"
                            style={styles.textInput}
                            onChangeText={(text) => handlePasswordChange(text)}
                        ></TextInput>
                        }
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ? 
                            <Feather 
                                name="eye-off"
                                color="gray"
                                size={20}
                            />
                            :
                            <Feather 
                                name="eye"
                                color="gray"
                                size={20}
                            />
                            }
                        </TouchableOpacity>
                    </View>
                    <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => {loginHandle(data.username, data.password)}}>
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                            <Text style={[styles.textSign, {
                                    color:'#fff'
                                }]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    

}
export default SignInComponent;

const styles = StyleSheet.create({
    
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});