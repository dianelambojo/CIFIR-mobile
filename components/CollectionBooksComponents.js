import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image, Pressable, Dimensions, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
const {width,height}= Dimensions.get("window");
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Swipeable from 'react-native-gesture-handler/Swipeable';




export const CollectionBooksComponents = () =>  {
    
    //const { id, name } = params.data;
        return (
           <Text> CollectionBook </Text>
        )
}

export default CollectionBooksComponents;

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
    bookContainer:{
        flexDirection:'row',
        padding: 5,
    },
    image: {
        width: 90,
        height: 150,
    },
    dataContainer:{
        padding: 10,
        paddingTop:5,
        width: width - 100,
    },
    title:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
    },
    description:{
        fontSize: 13,
        color : 'gray',
    },
    author:{
        fontSize: 16,
    },
    delButton:{
        backgroundColor:'#e5e5e5',
        alignItems:"center",
        justifyContent:"center",
        width: 70,
        height:185,
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        marginTop: 20,
        marginLeft: 100,
        borderRadius: 30,
        height: 30,
        width:200,
        backgroundColor: '#F0F0F0'
    },
    icon:{
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 5,
        color: '#E2454F',
    }
});