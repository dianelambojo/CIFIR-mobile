import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class NetworkLibraryComponent extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> NetworkLibrary Screen </Text>
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