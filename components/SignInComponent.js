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

import Users from './users';

const SignInComponent = () => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (value) => {
        if(value.length >= 4){
            setData({
                ...data,
                username: value,
                check_textInputChange: true,
                isValidUser: true
            });
        }

        else{
            setData({
                ...data,
                username: value,
                check_textInputChange: false,
                isValidUser: false
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

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {
        const foundUser = Users.filter( item => {
            return userName == item.email && password == item.password;
        });

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
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
                        <Text style={styles.text_footer}>Username</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user"
                                color="#fff"
                                size={20}
                            />
                            <TextInput 
                                placeholder="Your username"
                                style={styles.textInput}
                                onChangeText={(text) => textInputChange(text)}
                                onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}

                            />
                            {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn" >
                                <Feather
                                    name="check-circle"
                                    color="#fff"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                        </View>

                        { data.isValidUser ? null : 
                            <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                            </Animatable.View>
                        }

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
                                    color="#fff"
                                    size={20}
                                />
                                :
                                <Feather 
                                    name="eye"
                                    color="#fff"
                                    size={20}
                                />
                                }
                            </TouchableOpacity>
                        </View>
                        { data.isValidPassword ? null : 
                            <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                            </Animatable.View>
                        }
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
        color: '#FFFFFF',
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