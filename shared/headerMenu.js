import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    Dimensions, 
    TextInput,
    SafeAreaView,
    ScrollView,
    Image, 
    Animated,
    Easing,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions } from '@react-navigation/native';

import { useNavigation } from 'react-navigation-hooks';
import { withNavigation } from 'react-navigation';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HeaderMenu extends React.Component{
    constructor(props, {navigation}){
        super(props);

        //state
        this.state = { 
            isFocused: false,
            keyword: ''
        }

        //animation values
        this._input_box_translate_x = new Animated.Value(width);
        this._back_button_opacity = new Animated.Value(0);
        this._content_translate_y =  new Animated.Value(height);
        this._content_opacity = new Animated.Value(0);

    }

    _onFocus = () => {
        //update state
        this.setState({ isFocused: true });

        //animation
        Animated.timing(this._input_box_translate_x, {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }).start();

        Animated.timing(this._back_button_opacity, {
            duration: 200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }).start();

        // Animated.timing(this._content_translate_y, {
        //     duration: 0,
        //     toValue: 0,
        //     easing: Easing.inOut(Easing.ease)
        // }).start();

        Animated.timing(this._content_opacity, {
            duration: 200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }).start();
    
        //force focus
        this.refs.input.focus();
    }
    
    _onBlur = () => {
        //update state
        this.setState({ isFocused: false });

        //animation
        Animated.timing(this._input_box_translate_x, {
            duration: 200,
            toValue: width,
            easing: Easing.inOut(Easing.ease)
        }).start();

        Animated.timing(this._back_button_opacity, {
            duration: 50,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }).start();

        Animated.timing(this._content_translate_y, {
            duration: 0,
            toValue: height,
            easing: Easing.inOut(Easing.ease)
        }).start();

        Animated.timing(this._content_opacity, {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }).start();
    
        //force blur
        this.refs.input.blur();
    }
    render(){
        const openMenu = () => {
            this.props.navigation.openDrawer();
        }

        return (
            <>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <View style={styles.header}>
                            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
                            <View>
                                <Text style={styles.headerText}> {this.props.title} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <TouchableHighlight
                            activeOpacity={1}
                            underlayColor={"#ccd0d5"}
                            onPress={this._onFocus}
                            style={styles.search_icon_box}>
                            <Icon name="search" size={15} color="#000000"/>
                        </TouchableHighlight>
                    </View>
                    <Animated.View
                        style={[ styles.input_box, {transform: [{ translateX: this._input_box_translate_x }] } ]}>
                        <Animated.View style={{opacity: this._back_button_opacity}}>
                                <TouchableHighlight
                                    activeOpacity={1}
                                    underlayColor={"#ccd0d5"}
                                    onPress={this._onBlur}
                                    style={styles.back_icon_box}>
                                    <Icon name="chevron-left" size={15} color="#000000"/>
                                </TouchableHighlight>
                        </Animated.View>
                        <TextInput 
                            ref="input"
                            placeholder="Search"
                            clearButtonMode="always"
                            value={this.state.keyword}
                            onChangeText={(value) => this.setState({keyword: value})}
                            style={styles.input}
                        />
                    </Animated.View>
                </View>
                <Animated.View style={[styles.content, { opacity: this._content_opacity, transform: [{translateY: this._content_translate_y}] }]}>
                    <SafeAreaView style={styles.content_safe_area}>
                        <View style={styles.inner_view}>
                            <View style={styles.separator} />
                            {
                                this.state.keyword === ''
                                ?
                                    <View style={styles.image_placeholder_container}>
                                        <Image source={require('../assets/icons/no_search_result.jpg')} style={{ height:300, width:300 }}/>
                                    </View>
                                :
                                    <ScrollView>
                                        <View style={styles.search_item}>
                                            <Icon style={styles.search_item_icon} name="search" size={12} color="#ccd0d5"/>
                                            <Text>
                                                Fake Result 1
                                            </Text>
                                        </View>
                                    </ScrollView>
                            }
                        </View>
                    </SafeAreaView>
                </Animated.View>  
            </>
        );
    }
}

const styles = StyleSheet.create({
    // inner_header: {
    //     flex: 1,
    //     overflow: 'hidden',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     position: 'relative',
    // },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        padding: 10,
    },
    header: {
        width: 250,
        height: '100%',
       flexDirection: 'row',
    //    alignItems: 'flex-end',
       justifyContent: 'flex-start',
        paddingLeft: 35, 
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 0,
        color: 'white'
    },
    search_icon_box: {
        width: 35, 
        height: 35,
        borderRadius: 40,
        backgroundColor: "#e4e6eb",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_box: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#E2454F",
        width: '100%',
    },
    back_icon_box: {
        width: 35, 
        height: 35,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: "#e4e6eb",
        borderRadius: 16,
        paddingHorizontal: 16,
        fontSize: 15,
    },
    content: {
        width: width,
        height: height,
        position: 'absolute',
        left: 0,
        bottom: 0,
        elevation: 999,
    }, 
    content_safe_area: {
        flex: 1,
        backgroundColor: "white",
    },
    inner_view: {
        flex: 1,
        paddingTop: 50,
    },
    separator: {
        marginTop: 5,
        height: 1,
        backgroundColor: "#e6e4eb",
    },
    image_placeholder_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-50%',
    },
    search_item: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e4eb',
        marginLeft: 16,
    },
    search_item_icon: {
        paddingRight: 5,
    },
});

// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// import { useNavigation } from '@react-navigation/native';

// export default function HeaderMenu({ navigation }){

//     const openMenu = () => {
//         navigation.openDrawer();
//     }

//     return (
//         <View style={styles.header}>
//             <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
//             <View>
//                 <Text style={styles.headerText}> Library </Text>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     header: {
//         width: '100%',
//         height: '100%',
// //        flexDirection: 'row',
// //        alignItems: 'flex-end',
// //        justifyContent: 'flex-start',
//         paddingLeft: 35
//     },
//     headerText: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         color: '#FFF',
//         letterSpacing: 1
//     },
//     icon: {
//         position: 'absolute',
//         left: 0,
//         color: 'white'
//     }
// });