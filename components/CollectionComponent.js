import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image, Pressable, Dimensions, Button,onPress} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';


export default class CollectionComponent extends React.Component {
    constructor(){
        super();
        this.state={
            query: null,
            dataSource:[],
            dataBackup:[]
        };
    }

    componentDidMount(){
        var data=[
            {
                name: "Folder 1"
            },
            {
                name: "Folder 2"
            },
            {
                name: "Folder 3"
            },


        ];
        this.setState({
            dataBackup: data,
            dataSource:data
        })
    }
    render(){
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.containerbutton}>
                            <View style={styles.button}>
                                <Text style={styles.collectiontext}>New folder   <FontAwesome name="plus" style={styles.icon} size={14}/> </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                <FlatList
                    numColumns={3}
                    data={this.state.dataSource}
                    renderItem={({item,index}) =>{
                        return (
                                <TouchableOpacity onPress={onPress}>
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
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    collectiontext:{
        textAlign: 'center',
        fontSize: 14,
        fontFamily:'roboto',
        fontWeight: 'bold',
        color: '#fff',
    },
});
