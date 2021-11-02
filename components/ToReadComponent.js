import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ToReadComponent extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> ToRead Screen </Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF'
    },
});