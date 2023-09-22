/* eslint-disable react/prop-types */
// /screens/DetailScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { details } = route.params;

  return (
    <View style={styles.container}>
      <Text>{details.transliteration}</Text>
      <Text>{details.en.meaning}</Text>
      <Text>{details.en.desc}</Text>
      {/* ... display other details ... */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

export default DetailsScreen;
