import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image, Pressable, Dimensions, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
const {width,height}= Dimensions.get("window");
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const RenderRight = (progress, dragX) =>{
    const scale = dragX.interpolate({
        inputRange:[-50,0.5],
        outputRange:[1,0.1]
    })


    return(
        <View style={styles.delButton}>
            <FontAwesome name="trash" size={20} color={'#E2454F'}/>
        </View>
    );
}

export default class ToReadComponent extends React.Component {
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
                img: images.orvCover,
                description: "Kim Dokja does not consider himself the protagonist of his own life. Befitting the name his parents gave him, he is a solitary person whose sole hobby is reading web novels. For over a decade, he has lived vicariously through Yu Junghyeok, the main character of the web novel Three Ways to Survive the Apocalypse (TWSA). Through Junghyeok, Dokja has experienced secondhand the trials of repeatedly regressing in time, in search of an end to life-threatening scenarios that force people to act out narratives for the amusement of god-like Constellations."
            },
            {
                name: "Omniscient Reader's  Viewpoint",
                author: "Sing Shong",
                img: images.orvCover,
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
                {/*To Read Books */}
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent = {() => this.separator()}
                    renderItem={({item,index}) =>{
                        const deleteItem = () =>{
                            alert('Item Will be deleted');
                        }
                        return (
                            <Swipeable overshootRight={false} onSwipeableRightOpen={deleteItem} renderRightActions={RenderRight}>
                                <TouchableOpacity>
                                <View style={styles.bookContainer}>
                                    <Image style={styles.image}source={item.img}/>
                                    <View style ={styles.dataContainer}>
                                        <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                                        <Text numberOfLines={4} style={styles.description}>{item.description}</Text>
                                        <Text style={styles.author}>{item.author}</Text>

                                        <View style={styles.iconContainer}>
                                            <FontAwesome name="bookmark" style={styles.icon} size={20}/> 
                                            <FontAwesome name="thumb-tack" style={styles.icon} size={20}/> 
                                            <FontAwesome name="check" style={styles.icon} size={20}/> 
                                        </View>    
                                    </View>
                                </View>
                            </TouchableOpacity>
                            </Swipeable>
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
        width: 100,
        height: 180,
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
        height:200,
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        marginTop: 20,
        marginLeft: 70,
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