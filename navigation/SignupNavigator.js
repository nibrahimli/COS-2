import { createStackNavigator } from 'react-navigation';
import SignupScreen from '../screens/signup/SignupScreen';
import NumberRegisterScreen from '../screens/signup/NumberRegisterScreen';
import NewProfileScreen from '../screens/signup/NewProfileScreen';
import TestScreen from '../screens/signup/TestScreen';
import CameraScreen from '../screens/signup/CameraScreen';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html  
  Signup: SignupScreen,
  NumberRegister: NumberRegisterScreen,
  Test: TestScreen,
  NewProfile: NewProfileScreen,
  Camera: CameraScreen,  
});