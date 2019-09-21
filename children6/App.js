import React, {Component, TouchableWithoutFeedback} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Child from "./child.js";

export default function App(){
  return (
    <View style={styles.container}>
          <Child/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
