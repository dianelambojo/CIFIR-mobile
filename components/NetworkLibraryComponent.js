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
                description: 'Cambridge Core is the place to find valuable, useful and inspirational research and academic information. With over 1.8 million journal articles and 46,000+ books, Cambridge Core is the central destination for academic research.',
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
                description: 'Sign In to use authoritative ebooks provided by Cebu Institute of Technology',
                username: 'gradstud',
                password: 'CITUEBOOK',
                loginBtnSelector: '#login-form > div:nth-child(5) > button',
                usernameInputSelector: '#username',
                passwordInputSelector: '#password',
                otherValues: '',
            },
            {
                key: '3',
                name: 'Wiley Online Library', 
                goToSite: 'Explore Wiley Online Library',
                link: 'https://onlinelibrary.wiley.com/action/showLogin?uri=%2F&aria-label=Log+in+or+Register', 
                description: 'Wiley is committed to making Wiley Online Library accessible to all users. We continually review accessibility compliance and development practices to strengthen that commitment and ensure that our content is available to the entire research community',
                username: 'cebu', 
                password: 'CEBU12345',
                loginBtnSelector: '#login-form > div:nth-child(5) > button',
                usernameInputSelector: '#username',
                passwordInputSelector: '#password',
                otherValues: '',
            },

            {
                key: '4',
                name: 'Science Direct',  
                link: 'https://www.sciencedirect.com/user/login',
                description: '1.4 million articles on ScienceDirect are open access\r\nArticles published open access are peer-reviewed and made freely available for everyone to read, download and reuse in line with the user license displayed on the article.',
                goToSite: 'Explore Science Direct',
                username:  'llrc.lisa@gmail.com',
                password: 'pcieerd',
                loginBtnSelector: '#login-form > div:nth-child(5) > button',
                usernameInputSelector: '#username',
                passwordInputSelector: '#password',
                otherValues: '',
            },

            {
                key: '5',
                name: 'Directory of Open Access Books', 
                link: 'https://www.doabooks.org/', 
                goToSite: 'Explore Directory of Open Access Books',
                description: 'DOAB is a community-driven discovery service that indexes and provides access to scholarly, peer-reviewed open access books and helps users to find trusted open access book publishers. All DOAB services are free of charge and all data is freely avail', 
                username: '',
                password: '',
                loginBtnSelector: '',
                usernameInputSelector: '',
                passwordInputSelector: '',
                otherValues: '',
            },
            {
                key: '6',
                name: 'Zlibrary', 
                link: 'https://b-ok.asia/', 
                goToSite: 'Explore Zlibrary',
                description: 'Here you can always find the relevant information on the available domains for your region.',
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
                                    <Text style={styles.desc}> {item.description} </Text>
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