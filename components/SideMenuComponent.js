import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SideMenu extends React.Component {
    render() {
        return (
            
            <View style={styles.container}>
                
                {/* <Header style={{backgroundColor: '#fff', borderBottomWidth:0}}></Header> */}
                <Image source={require('../assets/cifirLogo.png')} style={styles.image}/>

                <View style={styles.line} />
                <Text onPress={() => this.props.navigation.navigate('HomePage')} style={styles.textStyle}>
                    <FontAwesome name="book" style={styles.icon} size={20}/>  All Books
                </Text>
                <Text onPress={() => this.props.navigation.navigate('Collections')} style={styles.textStyle}>
                    <FontAwesome name="archive" style={styles.icon} size={20}/>  Collections
                </Text>
                <Text onPress={() => this.props.navigation.navigate('Audiobooks')} style={styles.textStyle}>
                    <FontAwesome name="headphones" style={styles.icon} size={20}/>  Audiobooks
                </Text>
                <Text
                    onPress={() => this.props.navigation.navigate('NetworkLibraries')} style={styles.textStyle}>
                    <FontAwesome name="globe" style={styles.icon} size={20}/>  NetworkLibraries
                </Text>

                <View style={styles.line} />
                <Text onPress={() => this.props.navigation.navigate('Favorites')} style={styles.textStyle}>
                    <FontAwesome name="star-o" style={styles.icon} size={20}/>  Favorites
                </Text>
                <Text onPress={() => this.props.navigation.navigate('ToRead')} style={styles.textStyle}>
                    <FontAwesome name="clock-o" style={styles.icon} size={20}/>  To Read
                </Text>
                <Text onPress={() => this.props.navigation.navigate('HaveRead')} style={styles.textStyle}>
                    <FontAwesome name="check-square-o" style={styles.icon} size={20}/>  Have Read
                </Text>

                <View style={styles.line} />
                <Text onPress={() => this.props.navigation.navigate('Trash')} style={styles.textStyle}>
                    <FontAwesome name="trash-o" style={styles.icon} size={20}/>  Trash
                </Text>
                <Text onPress={() => this.props.navigation.navigate('Settings')} style={styles.textStyle}>
                    <FontAwesome name="cog" style={styles.icon} size={20}/>  Settings
                </Text>
                <Text onPress={() => this.props.navigation.navigate('SendFeedback')} style={styles.textStyle}>
                    <FontAwesome name="comments" style={styles.icon} size={20}/>  Send Feedback
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
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1B2F4B',
    },
    icon: {
        color: '#D83A3A'
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