import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import ReviewDetails from '../Screens/ReviewDetails';

const screens = {
  // the name for the screen
  Home: {
    // for this obj which one of the screen we wants
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

// here we need to pass the object for the screens that we will navigate between
export default HomeStackNavigation = createStackNavigator(screens);

// the app container will return render that we can use in app.js to navigate

// by default the home screen will be the first screen but then it
//  will be replaced with the other screen when we navigate to the other screen
