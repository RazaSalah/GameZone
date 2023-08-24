import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles, images} from '../styles/Global';
import Cards from '../Shared/Cards';

export default function ReviewDetails({navigation, route}) {
  const ratings = route.params.rating;

  return (
    <View style={styles.container}>
      {/* the route has been used to access the params , which is used to pass the data from one screen to another */}
      <Cards>
        <Text style={styles.title}>Name: {route.params.name}</Text>
        <Text style={styles.title}>Details: {route.params.body}</Text>
        {/* <Text style={styles.title}> Rating: {route.params.rating}</Text> */}
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          {/* here we have create an array of rating inside style file , we will call the array and pass the rating using the navigation props */}
          {/* the image will be passed on the passed rating number , if we pass 3 it will shows the image of three hearts */}
          <Image source={images.rating[ratings]} />
        </View>
      </Cards>
    </View>
  );
}
