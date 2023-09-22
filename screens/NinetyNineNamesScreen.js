/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// /screens/HomeScreen.js

import React from 'react';
import {  View,FlatList, StyleSheet, ImageBackground ,SafeAreaView} from 'react-native';

import NameCard from '../components/NameCard';
import nameData from '../data/nameData';
import Header from '../components/Header';

const ninetyNine = '99 Names Of Allah';

const COLORS = [
  '#d9b08c', '#ffcb9a', '#d1e8e2'
];

const NinetyNineNamesScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.container} source={require("../assets/backgroundimg.jpg")}>
      <SafeAreaView>
        <View style={styles.containerView}>
      <Header headerText={ninetyNine} style={styles.ninetyNineHeader} />
      <FlatList 
        data={nameData}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item, index }) => {
          const backgroundColor = COLORS[index % COLORS.length];
          return (
            <NameCard
              details={item}
              backgroundColor={backgroundColor}
              onPress={() => navigation.navigate('Details', { details: item })}
            />
          );
        }}
      />
       </View>
      </SafeAreaView>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '50px',
    padding: 10,
    
    backgroundColor: '#116466'
  },
  containerView: {
    marginTop: 60
  },
  customButton: {
    backgroundColor: "#FF5733",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
  
});

export default NinetyNineNamesScreen;
