import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartupNav from './navigation/StartupNav';

const AppNavigator = createStackNavigator(
  {
    Startup: { screen: StartupNav },
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;