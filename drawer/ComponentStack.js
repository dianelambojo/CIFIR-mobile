import { createStackNavigator } from 'react-navigation-stack';
import * as pageComponent from '../components/index.js';
import HeaderMenu from '../shared/headerMenu';
import React from 'react';

import Site from '../function/Site';

//creating the screens for stack navigator
const homeScreen = {
    HomePage: {
        screen: pageComponent.HomePageComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} title="Library"/>
            }
        }
    }
}
const collectionScreen = {
    Collection: {
        screen: pageComponent.CollectionComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation}  title="Collections"/>
            }
        }
    }
}

const networkLibraryScreen = {
    NetworkLibrary: {
        screen: pageComponent.NetworkLibraryComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation}  title="Network Library"/>
            }
        }
    },
    Site: {
        screen: Site,
        navigationOptions: {
            headerTitle: "Network Library"
        }
    }
}
const favoritesScreen = {
    Favorites: {
        screen: pageComponent.FavoritesComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation}  title="Favorites"/>
            }
        }
    }
}
const toReadScreen = {
    ToRead: {
        screen: pageComponent.ToReadComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation}  title="To Read"/>
            }
        }
    }
}
const haveReadScreen = {
    HaveRead: {
        screen: pageComponent.HaveReadComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} title="Have Read"/>
            }
        }
    }
}
const trashScreen = {
    TrashComponent: {
        screen: pageComponent.TrashComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} title="Trash"/>
            }
        }
    }
}
const settingsScreen = {
    Settings: {
        screen: pageComponent.SettingsComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} title="Settings"/>
            }
        }
    }
}
const sendFeedbackScreen = {
    SendFeedback: {
        screen: pageComponent.SendFeedbackComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} title="Send Feedback"/>
            }
        }
    }
}

//create collection
const createCollectionScreen = {
    CreateCollection: {
        screen: pageComponent.CreateCollectionComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}

//collectionbooks
const collectionBookScreen = {
    CollectionBook: {
        screen: pageComponent.CollectionBooksComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}


//creating Stack Navigators
const HomeStackNavigator = createStackNavigator(homeScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});

const CollectionStackNavigator = createStackNavigator(collectionScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});

const NetworkLibraryStackNavigator = createStackNavigator(networkLibraryScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});
const FavoritesStackNavigator = createStackNavigator(favoritesScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
        },
    }
});
const ToReadStackNavigator = createStackNavigator(toReadScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});
const HaveReadStackNavigator = createStackNavigator(haveReadScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});
const TrashStackNavigator = createStackNavigator(trashScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});
const SettingsStackNavigator = createStackNavigator(settingsScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});
const SendFeedbackStackNavigator = createStackNavigator(sendFeedbackScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});

const CreateCollectionStackNavigator = createStackNavigator(createCollectionScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});

const CollectionBookStackNavigator = createStackNavigator(collectionBookScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});

/*const SiteStackNavigator = createStackNavigator(siteScreen, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});*/

export {
    HomeStackNavigator,
    CollectionStackNavigator,
    NetworkLibraryStackNavigator,
    FavoritesStackNavigator,
    ToReadStackNavigator,
    HaveReadStackNavigator,
    TrashStackNavigator,
    SettingsStackNavigator,
    SendFeedbackStackNavigator,
    CreateCollectionStackNavigator,
    CollectionBookStackNavigator
}
