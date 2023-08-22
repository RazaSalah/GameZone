import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './Screens/Home';
import ReviewDetails from './Screens/ReviewDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {styles} from './styles/Global';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from './Screens/About';

const Drawer = createDrawerNavigator();
// here we need to pass the object the we have created using stack navigator for the screens that we will navigate between
const HomeStack = createNativeStackNavigator();
const GameZone = () => {
  return (
    // <NavigationContainer>
    //   <HomeStack.Navigator>
    //     <HomeStack.Screen
    //       component={Home}
    //       name="Home"
    //       options={{
    //         title: 'GameZone',
    //         // the text color
    //         headerTintColor: 'white',
    //         headerStyle: {
    //           backgroundColor: '#e7305b',
    //         },
    //       }}
    //     />
    //     <HomeStack.Screen
    //       component={ReviewDetails}
    //       name="ReviewDetails"
    //       options={{
    //         title: 'GameZone',
    //         // the text color
    //         headerTintColor: 'white',
    //         headerStyle: {
    //           backgroundColor: '#e7305b',
    //         },
    //       }}
    //     />
    //   </HomeStack.Navigator>
    // </NavigationContainer>
    // <Home />
    // the navigation container will return render that we can use in app.js to navigate
    // by default the home screen will be the first screen but then it
    //  will be replaced with the other screen when we navigate to the other screen
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerActiveTintColor: '#e91e63',
          drawerStyle: {
            backgroundColor: 'white',
            width: 240,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'GameZone',
            // the text color
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#e7305b',
            },
          }}
        />
        <Drawer.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: 'Review Details',
            // the text color
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#e7305b',
            },
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            title: 'About',
            // the text color
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#e7305b',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => GameZone);
