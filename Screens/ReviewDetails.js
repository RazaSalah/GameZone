import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function ReviewDetails() {
  return (
    <View style={Styles.container}>
      <Text>review details</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
