/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
 SafeAreaView,
  FlatList,
  Text,
  ImageBackground
} from "react-native";

import NameCard from "../components/NameCard";
import nameData from "../data/nameData";
import RamadanCountdown from "../components/RamadanCountdown";


const COLORS = ["#d9b08c", "#ffcb9a", "#d1e8e2", "#d9b08c"];

const MainHomeScreen = ({ navigation }) => {
  // State for holding randomized names
  const [randomNames, setRandomNames] = useState([]);

  useEffect(() => {
    // Function to shuffle the entire list
    const shuffleArray = (data) => {
      // Shuffle the array using the Fisher-Yates (aka Durstenfeld) algorithm
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }
      return data;
    };

    setRandomNames(shuffleArray([...nameData])); // Use spread to avoid mutating the original data
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.jpg")}
      style={styles.container}
    >
     <SafeAreaView>
      <View style={styles.containerView}>
        <Text style={styles.homeTop}>Home</Text>
      </View>
      <RamadanCountdown />
      <View>
        <Text>Featured</Text>
      </View>
      <FlatList
        data={randomNames.slice(0, 4)}
        renderItem={({ item, index }) => (
          <View style={styles.cardWrapper}>
            <NameCard
              details={item}
              backgroundColor={COLORS[index]}
              onPress={() => navigation.navigate("Details", { details: item })}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
      </SafeAreaView>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
   
  },
  containerView: {
    marginTop:60
  },
  cardWrapper: {
    width: 200, // slightly larger to account for potential padding or margins
    height: 120, // same here
    margin: 5 // or adjust as needed
  },
  homeTop: {
    color:'#fff',
    fontSize: 40,
    paddingBottom:20
  }
});

export default MainHomeScreen;
