import { createStackNavigator } from 'react-navigation-stack';

import HomePageComponent from "../components/HomePageComponent";

import HeaderMenu from '../shared/headerMenu';
import React from 'react';

const screens = {
    HomePage: {
        screen: HomePageComponent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMenu navigation={navigation} />
            }
        }
    }
}

const StackNavigator = createStackNavigator(screens, {
    defaultNavigationOptions: {
//        title: "Library",
        
        headerStyle: {
            backgroundColor: '#E2454F'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});

export default StackNavigator;
