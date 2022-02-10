import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SideMenuComponent from '../components/SideMenuComponent';
import * as pageComponentStack from './ComponentStack';
import Icon from 'react-native-vector-icons/FontAwesome';

const RootDrawerNavigation = createDrawerNavigator({
      HomePage: {
        screen: pageComponentStack.HomeStackNavigator,
        navigationOptions: {
            title: "All Books",
            drawerIcon: (
              <Icon reverseColor name='book' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
      Collections: {
          screen: pageComponentStack.CollectionStackNavigator,
          navigationOptions: {
            drawerIcon: (
              <Icon reverseColor name='folder' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
     
      NetworkLibraries: {
          screen: pageComponentStack.NetworkLibraryStackNavigator,
          navigationOptions: {
            title: "Network Libraries",
            drawerIcon: (
              <Icon reverseColor name='globe' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
      Favorites: {
          screen: pageComponentStack.FavoritesStackNavigator,
          navigationOptions: {
            drawerIcon: (
              <Icon reverseColor name='bookmark' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
      ToRead: {
          screen: pageComponentStack.ToReadStackNavigator,
          navigationOptions: {
            title: "To Read",
            drawerIcon: (
              <Icon reverseColor name='thumb-tack' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
      HaveRead: {
          screen: pageComponentStack.HaveReadStackNavigator,
          navigationOptions: {
            title: "Have Read",
            drawerIcon: (
              <Icon reverseColor name='check' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
      Trash: {
          screen: pageComponentStack.TrashStackNavigator,
          navigationOptions: {
            drawerIcon: (
              <Icon reverseColor name='trash' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
      Settings: {
          screen: pageComponentStack.SettingsStackNavigator,
          navigationOptions: {
            drawerIcon: (
              <Icon reverseColor name='cog' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
      SendFeedback: {
          screen: pageComponentStack.SendFeedbackStackNavigator,
          navigationOptions: {
            title: "Send Feedback",
            drawerIcon: (
              <Icon reverseColor name='comments-o' type='font-awesome' 
              style={{ color: '#E2454F' }}
              size={20}/>
            ),
        },
      },
      CreateCollection: {
        screen: pageComponentStack.CreateCollectionStackNavigator,
        navigationOptions: {
          drawerLabel: () => null
      },
    },
    CollectionBook: {
      screen: pageComponentStack.CollectionBookStackNavigator,
      navigationOptions: {
        drawerLabel: () => null
    },
  },
}, {
    contentComponent: SideMenuComponent,
    initialRouteName: "HomePage",
    contentOptions: {
      activeTintColor: '#E2454F',
      color: '#E2454F',
    },
    style: {
        margin: 0,
    },
});

export default createAppContainer(RootDrawerNavigation);

