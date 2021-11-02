import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashComponent from "./SplashComponent";
import SignInComponent from "./SignInComponent";
//import HomePageComponent from "./HomePageComponent";
//import CollectionComponent from "./CollectionComponent";

const screens = {
    SplashScreen: {
        screen: SplashComponent,
        navigationOptions:{
            headerShown: false
        }
    },
    SignInScreen: {
        screen: SignInComponent,
        navigationOptions:{
            headerShown: false
        }
    },
//    HomePageScreen: {
//        screen: HomePageComponent
//    },
//    CollectionScreen: {
//        screen: CollectionComponent
//    }
}

const StackNavigator = createStackNavigator(screens);

//const StackNavigator = createStackNavigator(screens, {
//    defaultNavigationOptions: {
//        title: "Library",
//        headerStyle: {
//            backgroundColor: '#29465B'
//        },
//        headerTitleStyle: {
//            fontWeight: 'bold',
//            color: 'white'
//        },
//    }
//});

export default createAppContainer (
    StackNavigator
);
