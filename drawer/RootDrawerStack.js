import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import SideMenuComponent from '../components/SideMenuComponent';
import * as drawerStack from './index.js';

const RootDrawerNavigation = createDrawerNavigator({
    HomePage: {
        screen: drawerStack.HomePageStack,
    },
    Collections: {
        screen: drawerStack.CollectionStack,
    },
    Audiobooks: {
        screen: drawerStack.AudioBookStack,
    },
    NetworkLibraries: {
        screen: drawerStack.NetworkLibraryStack,
    },
    Favorites: {
        screen: drawerStack.FavoriteStack,
    },
    ToRead: {
        screen: drawerStack.ToReadStack,
    },
    HaveRead: {
        screen: drawerStack.HaveReadStack,
    },
    Trash: {
        screen: drawerStack.TrashStack,
    },
    Settings: {
        screen: drawerStack.SettingStack,
    },
    SendFeedback: {
        screen: drawerStack.SendFeedbackStack,
    },
    

}, {
    contentComponent: SideMenuComponent,
});

export default createAppContainer(RootDrawerNavigation);

//export default RootDrawerNavigation;

