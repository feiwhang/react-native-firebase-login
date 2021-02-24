import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  LoginScreen,
  Register,
  Dashboard,
} from './screens';

const Router = createStackNavigator(
  {
    LoginScreen,
    Register,
    Dashboard,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
