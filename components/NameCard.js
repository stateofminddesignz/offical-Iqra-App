/* eslint-disable react/prop-types */
// /components/NameCard.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NameCard = ({ details, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor }]}  onPress={onPress}>
      <Text style={styles.arabicName}>{details.name}</Text>
      <Text>{details.transliteration}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#dad7cd',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "white"
    

    },
    arabicName: {
      color: "#3a5a40",
      fontSize:45,
      fontFamily: 'PT Serif'
    }
});

export default NameCard;
