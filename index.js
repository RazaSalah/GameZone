import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './Screens/Home';
import ReviewDetails from './Screens/ReviewDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const GameZone = () => {
  return (
    //   <Home />;
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ReviewDetails} name="ReviewDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => GameZone);
