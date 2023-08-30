import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../styles/Global';

export default function FlatButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
