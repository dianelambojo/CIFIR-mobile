import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image, Pressable, Dimensions, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
const {width,height}= Dimensions.get("window");

export default class TrashComponent extends React.Component {
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
                name: "Omniscient Reader's  Viewpoint",
                author: "Sing Shong",
                img: require('../assets/book1cover.jpg'),
                description: "Kim Dokja does not consider himself the protagonist of his own life. Befitting the name his parents gave him, he is a solitary person whose sole hobby is reading web novels. For over a decade, he has lived vicariously through Yu Junghyeok, the main character of the web novel Three Ways to Survive the Apocalypse (TWSA). Through Junghyeok, Dokja has experienced secondhand the trials of repeatedly regressing in time, in search of an end to life-threatening scenarios that force people to act out narratives for the amusement of god-like Constellations."
            },
            {
                name: "Omniscient Reader's  Viewpoint",
                author: "Sing Shong",
                img:require('../assets/book1cover.jpg'),
                description: "Kim Dokja does not consider himself the protagonist of his own life. Befitting the name his parents gave him, he is a solitary person whose sole hobby is reading web novels. For over a decade, he has lived vicariously through Yu Junghyeok, the main character of the web novel Three Ways to Survive the Apocalypse (TWSA). Through Junghyeok, Dokja has experienced secondhand the trials of repeatedly regressing in time, in search of an end to life-threatening scenarios that force people to act out narratives for the amusement of god-like Constellations."
            },

        ];
        this.setState({
            dataBackup: data,
            dataSource:data
        })
    }
    separator = () => {
        return (
            <View style={{height:10, width:'100%', backgroundColor: '#e5e5e5'}}></View>
        )
    }
    render(){
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                {/* Trash Books */}
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent = {() => this.separator()}
                    renderItem={({item,index}) =>{
                        return (
                            <TouchableOpacity>
                                <View style={styles.bookContainer}>
                                    <Image style={styles.image}source={item.img}/>
                                    <View style ={styles.dataContainer}>
                                        <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                                        <Text numberOfLines={4} style={styles.description}>{item.description}</Text>
                                        <Text style={styles.author}>{item.author}</Text>
                                    </View>
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
});