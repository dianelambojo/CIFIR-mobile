import React, { useState, useEffect}  from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image, Pressable, Dimensions, Button,onPress, RefreshControl} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage  from '@react-native-async-storage/async-storage';

export const CollectionComponent = ({ navigation }) =>  {
  
    const [data, setData] = useState([{
        name: 'Collection',
        id: 'id'
    }])

    const [loading, setLoading] = useState(true)
    

    const loadData = async() => {
        const userToken = await AsyncStorage.getItem('userToken');
        fetch('http://192.168.1.12:8000/api/collections/', {
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
        .catch(error => console.log("col error"))
    }

    useEffect(() => {
        
        loadData()
     
    }, []);

    const clickedItem = (data) => {
        navigation.navigate("CollectionBook", {data:data})
    }
        return (
            <View style={styles.container}>

                {/* Navigation Books & Collections*/}
                <View style={styles.row}>
                    <View style={styles.homebooks}>
                        <Text style={styles.textStyle} onPress={()=>navigation.navigate('HomePage')}>Books</Text>
                    </View>
                    <View style={styles.collectionbooks}>
                        <Text style={styles.textStyle} onPress={()=>navigation.navigate('Collections')}>Collections</Text>
                    </View>
                </View>

                {/* New folder button */}
                    <TouchableOpacity onPress={()=>navigation.navigate('CreateCollection')}>
                        <View style={styles.containerbutton}>
                            <View style={styles.button}>
                                <Text style={styles.collectiontext}>New folder   <FontAwesome name="plus" style={styles.icon} size={14} /> </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                {/* Folders */}
                <FlatList
                    numColumns={3}
                    data={data}
                    keyExtractor={item => `${item.id}`}
                    refreshControl={
                    <RefreshControl
                        onRefresh = { () => loadData()}
                        refreshing = {loading}
                        />
                    }
                    
                    renderItem={({item,index}) =>{
                        return (
                                <TouchableOpacity onPress={() => clickedItem(item)}>
                                    <View style={styles.containerfolders}>
                                            <FontAwesome name="folder" style={styles.folder} size={80}/> 
                                            <Text styles={styles.foldertitle} numberOfLines={1}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                        );
                    }}
                    
                    />
            </View>
            
        )
}

export default CollectionComponent;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
    containerfolders:{
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 10,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    folder:{
        color: '#ffd958',
        width: 90,
        height: 90,
        marginBottom: -10,
    },
    foldertitle:{
        alignSelf: 'flex-start',
        transform: [{ translateY: 5 }], 
    },
    containerbutton:{
        backgroundColor: '#E2454F',
        width: 150,
        height: 40,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    collectiontext:{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    collectionbooks:{
        backgroundColor: 'white',
        width: 210,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
    },
    homebooks:{
        backgroundColor: '#F5F5F5',
        width: 210,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
    },
});
