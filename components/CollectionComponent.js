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
                <View>
                    <Text>Collection Page</Text>
                </View>
                <FlatList
                    numColumns={3}
                    data={this.state.dataSource}
                    renderItem={({item,index}) =>{
                        return (
                                <View style={styles.containerfolders}>
                                        <FontAwesome name="folder" style={styles.folder} size={80}/> 
                                        <Text styles={styles.foldertitle} numberOfLines={1}>{item.name}</Text>

                                        {/* <View style={styles.containerplusbutton}>
                                            <TouchableOpacity>
                                                <FontAwesome name="plus" style={styles.plus} size={30}/>
                                            </TouchableOpacity>
                                        </View> */}
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
    containerplusbutton:{
        padding: 10,
        paddingTop:5,
    },
    plus:{
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20,
        color: '#E2454F',
    },
});
