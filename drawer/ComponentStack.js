import { createStackNavigator } from 'react-navigation-stack';
import * as pageComponent from '../components/index.js';
import HeaderMenu from '../shared/headerMenu';
import React from 'react';

//creating the screens for stack navigator
const homeScreen = {
    HomePage: {
        screen: pageComponent.HomePageComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const collectionScreen = {
    Collection: {
        screen: pageComponent.CollectionComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const audiobookScreen = {
    AudioBook: {
        screen: pageComponent.AudioBookComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const networkLibraryScreen = {
    NetworkLibrary: {
        screen: pageComponent.NetworkLibraryComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const favoritesScreen = {
    NetworkLibrary: {
        screen: pageComponent.FavoritesComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const toReadScreen = {
    NetworkLibrary: {
        screen: pageComponent.ToReadComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const haveReadScreen = {
    NetworkLibrary: {
        screen: pageComponent.HaveReadComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const trashScreen = {
    NetworkLibrary: {
        screen: pageComponent.TrashComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const settingsScreen = {
    NetworkLibrary: {
        screen: pageComponent.SettingsComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}
const sendFeedbackScreen = {
    NetworkLibrary: {
        screen: pageComponent.SendFeedbackComponent,
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
const AudioBookStackNavigator = createStackNavigator(audiobookScreen, {
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
            color: 'white'
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

export {
    HomeStackNavigator,
    CollectionStackNavigator,
    AudioBookStackNavigator,
    NetworkLibraryStackNavigator,
    FavoritesStackNavigator,
    ToReadStackNavigator,
    HaveReadStackNavigator,
    TrashStackNavigator,
    SettingsStackNavigator,
    SendFeedbackStackNavigator,
}
