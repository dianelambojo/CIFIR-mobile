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
                <LinearGradient
                colors={['#E2454F', '#ED8854']}
                style={styles.footer}
                >
                    <Animatable.View 
                        animation="fadeInUpBig" style={styles.footer}>
                        <Text style={styles.text_footer}>E-MAIL</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user"
                                color="#fff"
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
                                    color="#8EE56F"
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
                                color="#fff"
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
                                    color="#EC8275"
                                    size={20}
                                />
                                :
                                <Feather 
                                    name="eye"
                                    color="#EC8275"
                                    size={20}
                                />
                                }
                            </TouchableOpacity>
                        </View>
                        <Text style={{color: '#E7E7E7', marginTop:15}}>Forgot password?</Text>
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signIn}
                                onPress={() => {loginHandle(data.username, data.password)}}>
                                <LinearGradient
                                    colors={['#fff', '#E7E7E7']}
                                    style={styles.signIn}
                                >
                                <Text style={[styles.textSign, {
                                        color:'#E2454F'
                                    }]}>Sign In</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </LinearGradient>
            </View>
        )
    

}
export default SignInComponent;

const styles = StyleSheet.create({
    
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#E2454F',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
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
        color: '#FFEDEB'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14
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