import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Site({ navigation }) {
    
    /*const jscode = `
        document.querySelector('#username').setAttribute('value', 'llrc.lisa@gmail.com');
        document.querySelector('#password').setAttribute('value', 'libService2019');
        document.querySelector('#login-form > div:nth-child(5) > button').click();
    `*/

    // get the parameters
    const username = navigation.getParam('username');
    const password = navigation.getParam('password');
    const usernameInputSelector = navigation.getParam('usernameInputSelector');
    const passwordInputSelector = navigation.getParam('passwordInputSelector');
    const loginBtnSelector = navigation.getParam('loginBtnSelector');
    const otherValues = navigation.getParam('otherValues');
    const link = navigation.getParam('link'); 

    // fill input fields
    const uFill = "document.querySelector('"+ usernameInputSelector +"').setAttribute('value', '"+ username +"');"
    const pFill = "document.querySelector('"+ passwordInputSelector +"').setAttribute('value', '"+ password +"');"
    const submit = "document.querySelector('"+ loginBtnSelector +"').click();"

    // complete custom javascript code
    const jsCode = uFill + "\n" + pFill + "\n" + submit;
    
    const ActivityIndicatorElement = () => {
        return (
          <View style={styles.activityIndicatorStyle}>
            <ActivityIndicator
              color="#009688"
              size="large"
            />
          </View>
        );
    };

    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <WebView
                style={{ flex: 1 }} 
                javaScriptEnabled={true}
                injectedJavaScriptBeforeContentLoaded={jsCode}
                source = {{ uri: link }}
                onLoadStart={() => setVisible(true)}
                onLoad={() => setVisible(false)}
            /> 
            {visible ? <ActivityIndicatorElement /> : null}
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
})