/* eslint-disable no-undef */

import React, { useEffect, useState } from 'react';

import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NinetyNineNamesScreen from './screens/NinetyNineNamesScreen';
import DetailsScreen from './screens/DetailsScreen';
import MainHomeScreen from './screens/MainHomeScreen';


const MainStack = createStackNavigator();
const NinetyNineStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName="MainHome"  screenOptions={{
      headerShown: false
    }} >
      <MainStack.Screen name="MainHome" component={MainHomeScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
}

function NinetyNineStackNavigator() {
  return (
    <NinetyNineStack.Navigator initialRouteName="99 Names" screenOptions={{
      headerShown: false
    }} >
      <NinetyNineStack.Screen name="99 Names" component={NinetyNineNamesScreen} options={{ headerShown: false }} />
      <NinetyNineStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
    </NinetyNineStack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'PT Serif': require('./assets/fonts/PTSerif-Bold.ttf')
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
 
    <NavigationContainer  >
      <Tab.Navigator >
        <Tab.Screen name="MainHomeTab" component={MainStackNavigator} options={{ title: 'Main Home',headerShown: false } }   />
        <Tab.Screen name="99NamesTab" component={NinetyNineStackNavigator} options={{ title: '99 Names' , headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}
 


   
    // Other styling options
 

