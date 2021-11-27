import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image, Pressable, Dimensions, Button } from 'react-native';
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
            }

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
                <View>
                    <Text>Collection Page</Text>
                </View>
                <FlatList
                    numColumns={3}
                    data={this.state.dataSource}
                    renderItem={({item,index}) =>{
                        return (
                            <View style={styles.containerfolders}>
                                <View style={styles.row}>

                                    <FontAwesome name="folder" style={styles.folder} size={80}/> 


                                    {/* <Text numberOfLines={1} style={styles.title}>{item.name}</Text> */}
                                    
                                    {/* <View style={styles.containerplusbutton}>
                                        <TouchableOpacity>
                                            <FontAwesome name="plus" style={styles.plus} size={30}/>
                                        </TouchableOpacity>
                                    </View> */}


                                </View>
                                
                            </View>
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
    },
    folder:{
        marginTop: 20,
        marginRight: 15,
        marginLeft: 20,
        color: '#ffd958',
    },
    containerfolders:{
        padding: 10,
        paddingTop:5,
    },
    row: {
        flexDirection: 'row',
    },
    plus:{
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20,
        color: '#E2454F',
    },
    containerplusbutton:{
        padding: 10,
        paddingTop:5,
    },
    title:{
        fontSize: 14,
        color: '#000',
        alignContent: 'center',
        marginTop: 100,
    },  
});
