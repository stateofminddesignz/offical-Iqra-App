/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react'
import {View, StyleSheet, Text, ImageBackground} from 'react-native'

const Header = ({headerText}) => {
  return (
   <View style={styles.container}>
    <ImageBackground source={require('../assets/islamic.jpg')} style={styles.backgroundImg}>
    <Text style={styles.header}>{headerText}</Text>
    </ImageBackground>

   
    
   </View>
  )
} 


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#588157',
    alignItems:'center',
    borderRadius: 10,
   marginBottom:10,
   borderWidth:2,
   borderColor: 'white',
   height: "20%"

  },
  header:{
    fontSize: 40,
    color:'white'
    

  },
  backgroundImg :{
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    resizeMode: 'cover',
    overflow:'hidden',
    borderRadius: 10
    
      // Ensures the image covers the entire view without stretching.
    
  }

})

export default Header