import React, { useState, useEffect} from 'react';
import { View, Text, Dimensions, TouchableOpacity, Platform, StyleSheet, Pressable, Button, SafeAreaView,Image, ScrollView } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';


import AsyncStorage  from '@react-native-async-storage/async-storage';


const {width,height}= Dimensions.get("window");


export const HomePageComponent = ({ navigation }) =>  {
    
    const [data, setData] = useState([{
                            title: 'Title',
                            id: 'id',
                            img: images.orvCover,
                            book_author: 'Author',
                            file: '',
                        }])
    const [loading, setLoading] = useState(true)

    const loadData = async() => {
        const userToken = await AsyncStorage.getItem('userToken');
        fetch('http://192.168.1.15:8000/api/books/', {
            method: "GET",
            headers: {
                'Authorization': 'Token ' + userToken
            }
        })

        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(error => console.log("error"))
    }

    useEffect(() => {
        
        loadData()
     
    }, []);



    const separator = () => {
        return (
            <View style={{height:10, width:'100%', backgroundColor: '#e5e5e5'}}></View>
        )
    }

  
        return (
            <View style={styles.container}>

                {/* Navigation Books & Collections*/}
                <View style={styles.row}>
                    <View style={styles.homebooks}>
                        <Text style={styles.textStyle} onPress={ ()=>navigation.navigate('HomePage')}>Books</Text>
                    </View>
                    <View style={styles.collectionbooks}>
                        <Text style={styles.textStyle} onPress={ ()=> navigation.navigate('Collections')}>Collections</Text>
                    </View>
                </View>
                
                {/* My Library */}
                    <View>
                        <Text style={styles.mylibraryText}>Recently Read</Text>
                    </View>
                    {/* <ScrollView> */}
                    <FlatList
                        style={styles.flatlistTop}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item) => item.id}
                        onRefresh = { () => loadData()}
                        refreshing = {loading}
                        
                        renderItem={({item}) =>{
                            return (
                                    <TouchableOpacity>
                                    <View style={styles.bookContainer}>
                                        <Image style={styles.imageTop}source={images.orvCover}/>
                                            {/* <View style ={styles.dataContainer}>
                                                <Image style={styles.image}source={item.img}/>
                                                <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                                                <Text numberOfLines={4} style={styles.description}>{item.description}</Text>
                                                <Text style={styles.author}>{item.author}</Text>
                                            </View> */}
                                    </View>
                                    
                                </TouchableOpacity>
                                
                            );
                        }}
                        />

                        {/* Recently Added*/}
                        <View>
                            <Text style={styles.recentlyaddedText}>Recently Added </Text>
                        </View>

                        <FlatList
                        style={styles.flatlistBottom}
                        data={data}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent = {() => separator()}

                        onRefresh = { () => loadData()}
                        refreshing = {loading}

                        renderItem={({item}) =>{
                            return (
                                <TouchableOpacity>
                                    <View style={styles.bookContainer}>
                                        <Image style={styles.imageBottom}source={images.orvCover}/>
                                        <View style ={styles.dataContainer}>
                                            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                                            {/* <Text numberOfLines={4} style={styles.description}>{item.book_author}</Text> */}
                                            <Text style={styles.author}>{item.book_author}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        />
                {/* </ScrollView> */}

                {/* Add button*/}
                <TouchableOpacity style={styles.floatingActionButton}>
                    <FontAwesome name="plus" style={styles.icon} size={20}/>
                </TouchableOpacity>
            </View>
            
        )
}
export default HomePageComponent;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    row: {
        flexDirection: 'row',
    },
    textStyle: {
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E2454F',

    },
    bookContainer:{
        flexDirection:'row',
        padding: 5,
    },
    imageTop: {
        width: 180,
        height: 250,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    imageBottom: {
        width: 90,
        height: 150,
        borderRadius: 5,
        resizeMode: 'cover',
    },
    dataContainer:{
        padding: 10,
        paddingTop:5,
        width: width - 100,
    },
    title:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1B2F4B',
    },
    description:{
        fontSize: 13,
        color : 'gray',
    },
    author:{
        color: 'gray',
        fontSize: 16,
    },
    floatingActionButton:{
        backgroundColor: '#E2454F',
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 45,
        right: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        color: 'white',
    },
    homebooks:{
        backgroundColor: 'white',
        width: 210,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
    },
    collectionbooks:{
        backgroundColor: '#F5F5F5',
        width: 210,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
    },
    mylibraryText:{
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1B2F4B',
    },
    recentlyaddedText:{
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
    flatlistTop:{
        marginTop: 5,

    },
    flatlistBottom:{
        marginTop: 5,
        height: 200,
    },

});
