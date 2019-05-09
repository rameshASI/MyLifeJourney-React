import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/homescreen/HomeScreen';
import LoginScreen from '../screens/loginscreen/LoginScreen';
import RegisterScreen from '../screens/registerscreen/RegisterScreen';

const NavStack = createStackNavigator({
  HomeScreen: { 
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
  },
  LoginScreen: { 
      screen: LoginScreen,
  },
  RegisterScreen: {
    screen: RegisterScreen
  },
  
});

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;
