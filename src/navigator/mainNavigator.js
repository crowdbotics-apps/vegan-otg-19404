import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial87957Navigator from '../features/Tutorial87957/navigator';
import NotificationList87929Navigator from '../features/NotificationList87929/navigator';
import Settings87928Navigator from '../features/Settings87928/navigator';
import Settings87920Navigator from '../features/Settings87920/navigator';
import UserProfile87918Navigator from '../features/UserProfile87918/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial87957: { screen: Tutorial87957Navigator },
NotificationList87929: { screen: NotificationList87929Navigator },
Settings87928: { screen: Settings87928Navigator },
Settings87920: { screen: Settings87920Navigator },
UserProfile87918: { screen: UserProfile87918Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
