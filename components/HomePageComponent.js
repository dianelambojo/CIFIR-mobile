import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Platform, StyleSheet, Pressable, Button, SafeAreaView,Image, ScrollView } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width,height}= Dimensions.get("window");

export default class HomePageComponent extends React.Component {
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
            {
                name: "Omniscient Reader's  Viewpoint",
                author: "Sing Shong",
                img:require('../assets/book1cover.jpg'),
                description: "Kim Dokja does not consider himself the protagonist of his own life. Befitting the name his parents gave him, he is a solitary person whose sole hobby is reading web novels. For over a decade, he has lived vicariously through Yu Junghyeok, the main character of the web novel Three Ways to Survive the Apocalypse (TWSA). Through Junghyeok, Dokja has experienced secondhand the trials of repeatedly regressing in time, in search of an end to life-threatening scenarios that force people to act out narratives for the amusement of god-like Constellations."
            },
            {
                name: "Omniscient Reader's  Viewpoint",
                author: "Sing Shong",
                img:require('../assets/book1cover.jpg'),
                description: "Kim Dokja does not consider himself the protagonist of his own life. Befitting the name his parents gave him, he is a solitary person whose sole hobby is reading web novels. For over a decade, he has lived vicariously through Yu Junghyeok, the main character of the web novel Three Ways to Survive the Apocalypse (TWSA). Through Junghyeok, Dokja has experienced secondhand the trials of repeatedly regressing in time, in search of an end to life-threatening scenarios that force people to act out narratives for the amusement of god-like Constellations."
            },
            {
                name: "Omniscient Reader's  Viewpoint",
                author: "Sing Shong",
                img:require('../assets/book1cover.jpg'),
                description: "Kim Dokja does not consider himself the protagonist of his own life. Befitting the name his parents gave him, he is a solitary person whose sole hobby is reading web novels. For over a decade, he has lived vicariously through Yu Junghyeok, the main character of the web novel Three Ways to Survive the Apocalypse (TWSA). Through Junghyeok, Dokja has experienced secondhand the trials of repeatedly regressing in time, in search of an end to life-threatening scenarios that force people to act out narratives for the amusement of god-like Constellations."
            },
            {
                name: "Omniscient Reader's  Viewpoint",
                author: "Sing Shong",
                img:require('../assets/book1cover.jpg'),
                description: "Kim Dokja does not consider himself the protagonist of his own life. Befitting the name his parents gave him, he is a solitary person whose sole hobby is reading web novels. For over a decade, he has lived vicariously through Yu Junghyeok, the main character of the web novel Three Ways to Survive the Apocalypse (TWSA). Through Junghyeok, Dokja has experienced secondhand the trials of repeatedly regressing in time, in search of an end to life-threatening scenarios that force people to act out narratives for the amusement of god-like Constellations."
            }

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

                {/* Navigation Books & Collections*/}
                <View style={styles.row}>
                    <View style={styles.homebooks}>
                        <Text style={styles.textStyle} onPress={()=>this.props.navigation.navigate('HomePage')}>Books</Text>
                    </View>
                    <View style={styles.collectionbooks}>
                        <Text style={styles.textStyle} onPress={()=>this.props.navigation.navigate('Collections')}>Collections</Text>
                    </View>
                </View>
                
                {/* My Library */}
                    <View>
                        <Text style={styles.mylibraryText}>My Library</Text>
                    </View>
                    <ScrollView>
                    <FlatList
                        style={styles.flatlistTop}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={this.state.dataSource}
                        
                        renderItem={({item,index}) =>{
                            return (
                                <TouchableOpacity>
                                    <View style={styles.bookContainer}>
                                        <Image style={styles.imageTop}source={item.img}/>
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
                        data={this.state.dataSource}
                        ItemSeparatorComponent = {() => this.separator()}
                        renderItem={({item,index}) =>{
                            return (
                                <TouchableOpacity>
                                    <View style={styles.bookContainer}>
                                        <Image style={styles.imageBottom}source={item.img}/>
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
                </ScrollView>

                {/* Add button*/}
                <TouchableOpacity style={styles.floatingActionButton}>
                    <FontAwesome name="plus" style={styles.icon} size={20}/>
                </TouchableOpacity>
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
    }

});
