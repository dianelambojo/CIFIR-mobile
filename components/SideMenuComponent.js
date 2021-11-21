import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerItems } from 'react-navigation-drawer';

import { AuthContext } from './context';

const SideMenu = (props) => {
    const { signOut } = React.useContext(AuthContext);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    {/* <Header style={{backgroundColor: '#fff', borderBottomWidth:0}}></Header> */}
                    <Image source={require('../assets/CIFIR_Logo.png')} style={styles.image}/>
                    <View style={styles.line} />
                </View>
                
                <DrawerItems {...props} />
                <View>
                    <Text style={styles.logout} onPress={() => {signOut()}}>
                        <FontAwesome name="sign-out" style={styles.icon} size={20}/>  Logout
                    </Text>
                    <Text></Text>
                    <Text></Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

//const SideMenu = ({ props, navigation }) => {
//
//    const { signOut } = React.useContext(AuthContext);
//        return (
//
//            <View style={styles.container}>
//
//                {/* <Header style={{backgroundColor: '#fff', borderBottomWidth:0}}></Header> */}
//                <Image source={require('../assets/CIFIR_Logo.png')} style={styles.image}/>
//
//                <View style={styles.line} />
//                <Text onPress={() => navigation.navigate('HomePage')} style={styles.textStyle}>
//                    <FontAwesome name="book" style={styles.icon} size={20}/>  All Books
//                </Text>
//                <Text onPress={() => navigation.navigate('Collections')} style={styles.textStyle}>
//                    <FontAwesome name="archive" style={styles.icon} size={20}/>  Collections
//                </Text>
//                <Text onPress={() => navigation.navigate('Audiobooks')} style={styles.textStyle}>
//                    <FontAwesome name="headphones" style={styles.icon} size={20}/>  Audiobooks
//                </Text>
//                <Text
//                    onPress={() => navigation.navigate('NetworkLibraries')} style={styles.textStyle}>
//                    <FontAwesome name="globe" style={styles.icon} size={20}/>  NetworkLibraries
//                </Text>
//
//                <View style={styles.line} />
//                <Text onPress={() => navigation.navigate('Favorites')} style={styles.textStyle}>
//                    <FontAwesome name="star-o" style={styles.icon} size={20}/>  Favorites
//                </Text>
//                <Text onPress={() => navigation.navigate('ToRead')} style={styles.textStyle}>
//                    <FontAwesome name="clock-o" style={styles.icon} size={20}/>  To Read
//                </Text>
//                <Text onPress={() => navigation.navigate('HaveRead')} style={styles.textStyle}>
//                    <FontAwesome name="check-square-o" style={styles.icon} size={20}/>  Have Read
//                </Text>
//
//                <View style={styles.line} />
//                <Text onPress={() => navigation.navigate('Trash')} style={styles.textStyle}>
//                    <FontAwesome name="trash-o" style={styles.icon} size={20}/>  Trash
//                </Text>
//                <Text onPress={() => navigation.navigate('Settings')} style={styles.textStyle}>
//                    <FontAwesome name="cog" style={styles.icon} size={20}/>  Settings
//                </Text>
//                <Text onPress={() => navigation.navigate('SendFeedback')} style={styles.textStyle}>
//                    <FontAwesome name="comments" style={styles.icon} size={20}/>  Send Feedback
//                </Text>
//
//                <Text style={styles.logout}  onPress={() => {signOut()}}>
//                    <FontAwesome name="sign-out" style={styles.icon} size={20}/>  Logout
//                </Text>
//                <DrawerItemList {...props} />
//            </View>
//        );
//}
export default SideMenu;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      margin: 15,
    },
    image: {
        width: 'auto',
        height: '9%',
        marginBottom: 10,
        resizeMode: "contain",
        height: 100,
        width: 200,

    },
    textStyle: {
        paddingBottom: 15,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1B2F4B',
    },
    icon: {
        color: '#E2454F'
    },
    line: {
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 3,
        width: '90%',
        margin: 5,
    },
    logout: {
        left: 150,
        top: 10,
        fontWeight: 'bold',
        fontSize: 18,
    },
});