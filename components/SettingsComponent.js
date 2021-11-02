import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class SettingsComponent extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> Settings Screen </Text>
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