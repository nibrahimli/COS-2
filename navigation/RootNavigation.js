import React from 'react';
import { Notifications } from 'expo';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SignupScreen from '../screens/signup/SignupScreen';
import NumberRegisterScreen from '../screens/signup/NumberRegisterScreen';
import NewProfileScreen from '../screens/signup/NewProfileScreen';
import TestScreen from '../screens/signup/TestScreen';
import CameraScreen from '../screens/signup/CameraScreen';
import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RegisterNavigator = createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html  
  Signup: SignupScreen,
  NumberRegister: NumberRegisterScreen,
  Test: TestScreen,
  NewProfile: NewProfileScreen,
  Camera: CameraScreen,  
},
{
    headerMode: 'screen',
    initialRouteName: 'Main'  
});

const AppNavigator = createSwitchNavigator({
  Main: MainTabNavigator,
  RegisterNavigator
});

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <AppNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
