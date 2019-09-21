import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Alert, Button } from 'react-native';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "black"}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: '#865ab0'}}>
        <Button title="Parents" color="white"/>
      </FadeInView>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'black'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}></Text>
      </FadeInView>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'black'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}></Text>
      </FadeInView>
      <FadeInView style={{width: 250, height: 50, backgroundColor: '#865ab0'}}>
        <Button title="Children" color="white" onPress={() => Alert.alert('Go to child page')}/>
      </FadeInView>
    </View>

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
});

}
