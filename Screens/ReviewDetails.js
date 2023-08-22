import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../styles/Global';

export default function ReviewDetails({navigation, route}) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* the route has been used to access the params , which is used to pass the data from one screen to another */}
      <Text style={styles.title}>{route.params.name}</Text>
      <Text style={styles.title}>{route.params.body}</Text>
      <Text style={styles.title}>{route.params.rating}</Text>
    </View>
  );
}
