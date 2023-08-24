import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {styles} from '../styles/Global';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({title}) {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <View style={styles.header}>
      <View style={styles.Content}>
        {/* icon */}
        {/* <Image
          style={styles.headerImage}
          source={require('../assets/heart_logo.png')}
        /> */}
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}
