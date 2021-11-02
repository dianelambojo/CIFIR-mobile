import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class AudioBookComponent extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> AudioBook Screen </Text>
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
