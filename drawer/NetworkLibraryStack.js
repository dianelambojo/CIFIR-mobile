import { createStackNavigator } from 'react-navigation-stack';

import NetworkLibraryComponent from "../components/NetworkLibraryComponent";

import HeaderMenu from '../shared/headerMenu';
import React from 'react';

const screens = {
    NetworkLibrary: {
        screen: NetworkLibraryComponent,
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
            backgroundColor: '#2B353B'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    }
});

export default StackNavigator;
