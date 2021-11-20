import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SideMenuComponent from '../components/SideMenuComponent';
import * as pageComponentStack from './ComponentStack';

const RootDrawerNavigation = createDrawerNavigator({
      HomePage: {
        screen: pageComponentStack.HomeStackNavigator,
      },
      Collections: {
          screen: pageComponentStack.CollectionStackNavigator,
      },
      Audiobooks: {
          screen: pageComponentStack.AudioBookStackNavigator,
      },
      NetworkLibraries: {
          screen: pageComponentStack.NetworkLibraryStackNavigator,
      },
      Favorites: {
          screen: pageComponentStack.FavoritesStackNavigator,
      },
      ToRead: {
          screen: pageComponentStack.ToReadStackNavigator,
      },
      HaveRead: {
          screen: pageComponentStack.HaveReadStackNavigator,
      },
      Trash: {
          screen: pageComponentStack.TrashStackNavigator,
      },
      Settings: {
          screen: pageComponentStack.SettingsStackNavigator,
      },
      SendFeedback: {
          screen: pageComponentStack.SendFeedbackStackNavigator,
      },
}, {
    contentComponent: SideMenuComponent,
});

export default createAppContainer(RootDrawerNavigation);

//export default RootDrawerNavigation;

