import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HeaderMenu({ navigation }){

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}> Library </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
//        flexDirection: 'row',
//        alignItems: 'flex-end',
//        justifyContent: 'flex-start',
        paddingLeft: 35
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 0,
        color: 'white'
    }
});