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

                {/* Navigation Books & Collections*/}
                <View style={styles.row}>
                    <View style={styles.homebooks}>
                        <Text style={styles.textStyle} onPress={()=>this.props.navigation.navigate('HomePage')}>Books</Text>
                    </View>
                    <View style={styles.collectionbooks}>
                        <Text style={styles.textStyle} onPress={()=>this.props.navigation.navigate('Collections')}>Collections</Text>
                    </View>
                </View>

                {/* New folder button */}
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.containerbutton}>
                            <View style={styles.button}>
                                <Text style={styles.collectiontext}>New folder  <FontAwesome name="plus" style={styles.icon} size={14} /> </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                {/* Folders */}
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
        width: 130,
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
        fontFamily:'roboto',
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
