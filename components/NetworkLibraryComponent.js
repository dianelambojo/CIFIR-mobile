import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    FlatList, 
    ScrollView,
    TouchableHighlight,
    Image,
} from 'react-native';
export default class NetworkLibraryComponent extends React.Component {

    render(){
    
        const links = [
            {
                key: '1',
                name: 'Cambridge Core',
                goToSite: 'Explore Cambridge Core',
                link: 'https://www.cambridge.org/core/authenticate/connect?state=/',
                username: 'llrc.lisa@gmail.com',
                password: 'libService2019',
                loginBtnSelector: '#login-form > div:nth-child(5) > button',
                usernameInputSelector: '#username',
                passwordInputSelector: '#password',
                otherValues: '',
            },
            {
                key: '2',
                name: 'ProQuest',
                goToSite: 'Explore ProQuest',
                link: 'https://ebookcentral.proquest.com/auth/lib/citph-ebooks/login.action',
                username: '',
                password: '',
                loginBtnSelector: '',
                usernameInputSelector: '',
                passwordInputSelector: '',
                otherValues: '',
            },
        ]

        return (
            <View style={styles.container}>
                <FlatList 
                    data = {links}
                    renderItem={
                        ({ item }) => {
                            return(
                                <View style={styles.boxItem}>
                                    <Image 
                                        style={styles.image}
                                        source={require('../assets/CIFIR_Logo.png')}
                                    />
                                    <Text style={styles.item}> {item.name} </Text>
                                    <Text style={styles.desc}> description </Text>
                                    <TouchableHighlight
                                        onPress={ () => {
                                             this.props.navigation.navigate('Site', {
                                                link: item.link,
                                                username: item.username ,
                                                password: item.password,
                                                loginBtnSelector: item.loginBtnSelector,
                                                usernameInputSelector: item.usernameInputSelector,
                                                passwordInputSelector: item.passwordInputSelector,
                                                otherValues: '',
                                            }); 
                                        }}
                                    >
                                        <Text style={styles.explore}> {item.goToSite} </Text>
                                    </TouchableHighlight>
                                </View>
                            );
                        }
                    }
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
    item: {  
        margin: 5,  
        fontSize: 18,
        fontWeight: "bold",  
    },
    explore: {  
        margin: 5,  
        fontSize: 18,
        color: "lightblue",
        fontWeight: "bold",
    },
    desc: {
        fontSize: 16,
        margin: 5,
    }, 
    boxItem: {
        borderColor: "#000000",
        borderBottomWidth: 3,
        borderRadius: 16,
        margin: 8,
        elevation: 5,
    },
    image: {
        margin: 10,
        height: 50,
        width: 50,
    },
});