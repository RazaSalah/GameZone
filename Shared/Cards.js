import React from 'react';
import {styles} from '../styles/Global';
import {Text, View} from 'react-native';

export default function Cards(props) {
  return (
    <View style={styles.cards}>
      <View style={styles.cardsContent}>
        {/* in order to use the cards in diff screens not only for one screen  */}
        {props.children}
      </View>
    </View>
  );
}
