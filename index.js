import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './Screens/Home';
import ReviewDetails from './Screens/ReviewDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// here we need to pass the object the we have created using stack navigator for the screens that we will navigate between
const Stack = createNativeStackNavigator();
const GameZone = () => {
  return (
    //   <Home />;
    // the navigation container will return render that we can use in app.js to navigate
    // by default the home screen will be the first screen but then it
    //  will be replaced with the other screen when we navigate to the other screen
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ReviewDetails} name="ReviewDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => GameZone);
