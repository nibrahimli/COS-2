import { createSwitchNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import SignupNavigator from './SignupNavigator';


export default createSwitchNavigator(
  {    
    Auth: SignupNavigator,
    App: TabNavigator,    
  });