<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Alert, Button, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';

  const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
=======
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
>>>>>>> 717a9a713e7da4405ab106b143c477c421ae15fa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
<<<<<<< HEAD

  // You can then use your `FadeInView` in place of a `View` in your components:
  export default () => {
    return (
      <ImageBackground source={require('../children6/purplehex.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: 300, height: 50, backgroundColor: 'white'}}>
           <Image source={require('../children6/ccaclogo.jpg')} style={{width: '100%', height: '300%'}}/>
      </View>
      </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

          <TouchableWithoutFeedback>
            <Text onPress={() => Alert.alert('Go to parent page')} style={{color: 'white', fontSize: 48 }}>Parents</Text>
          </TouchableWithoutFeedback>

          <FadeInView style={{width: 250, height: 50}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}></Text>
          </FadeInView>
          <FadeInView style={{width: 250, height: 50}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}></Text>
          </FadeInView>

          <TouchableWithoutFeedback>
            <Text onPress={() => Alert.alert('Go to child page')} style={{color: 'white', fontSize: 48 }}>Children</Text>
          </TouchableWithoutFeedback>

        </View>
      </ImageBackground>


    )

    const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    image: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
  });

}
=======
});
>>>>>>> 717a9a713e7da4405ab106b143c477c421ae15fa
