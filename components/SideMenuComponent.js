import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SideMenu extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Image source={require('../assets/cifir.jpg')} style={styles.image}/>

                <View style={styles.line} />
                <Text onPress={() => this.props.navigation.navigate('HomePage')} style={styles.textStyle}>
                    <FontAwesome name="book" style={styles.icon} size={15}/>  All Books
                </Text>
                <Text onPress={() => this.props.navigation.navigate('Collections')} style={styles.textStyle}>
                    <FontAwesome name="archive" style={styles.icon} size={15}/>  Collections
                </Text>
                <Text onPress={() => this.props.navigation.navigate('Audiobooks')} style={styles.textStyle}>
                    <FontAwesome name="headphones" style={styles.icon} size={15}/>  Audiobooks
                </Text>
                <Text
                    onPress={() => this.props.navigation.navigate('NetworkLibraries')} style={styles.textStyle}>
                    <FontAwesome name="globe" style={styles.icon} size={15}/>  NetworkLibraries
                </Text>

                <View style={styles.line} />
                <Text onPress={() => this.props.navigation.navigate('Favorites')} style={styles.textStyle}>
                    <FontAwesome name="star-o" style={styles.icon} size={15}/>  Favorites
                </Text>
                <Text onPress={() => this.props.navigation.navigate('ToRead')} style={styles.textStyle}>
                    <FontAwesome name="clock-o" style={styles.icon} size={15}/>  To Read
                </Text>
                <Text onPress={() => this.props.navigation.navigate('HaveRead')} style={styles.textStyle}>
                    <FontAwesome name="check-square-o" style={styles.icon} size={15}/>  Have Read
                </Text>

                <View style={styles.line} />
                <Text onPress={() => this.props.navigation.navigate('Trash')} style={styles.textStyle}>
                    <FontAwesome name="trash-o" style={styles.icon} size={15}/>  Trash
                </Text>
                <Text onPress={() => this.props.navigation.navigate('Settings')} style={styles.textStyle}>
                    <FontAwesome name="cog" style={styles.icon} size={15}/>  Settings
                </Text>
                <Text onPress={() => this.props.navigation.navigate('SendFeedback')} style={styles.textStyle}>
                    <FontAwesome name="comments" style={styles.icon} size={15}/>  Send Feedback
                </Text>
                <Text style={styles.logout}>
                    Logout
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      margin: 15,
    },
    image: {
        width: 'auto',
        height: '9%',
        marginBottom: 10,
    },
    textStyle: {
        paddingBottom: 15,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
    icon: {
        color: 'maroon'
    },
    line: {
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 3,
        width: '90%',
        margin: 10,
    },
    logout: {
        left: 200,
        top: 120,
        fontWeight: 'bold',
        fontSize: 18,
    },
});