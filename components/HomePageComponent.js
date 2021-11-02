import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Pressable, Button } from 'react-native';

export default class HomePageComponent extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.textStyle} onPress={()=>this.props.navigation.navigate('HomePage')}>Books</Text>
                    <Text style={styles.textStyle} onPress={()=>this.props.navigation.navigate('Collections')}>Collections</Text>
                </View>
                <View>
                    <Text>HomePage</Text>
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
    row: {
        flexDirection: 'row',
    },
    textStyle: {
        marginTop: 25,
        marginRight: 15,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomColor: 'red'
    },
    button: {

    }
});
