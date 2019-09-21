import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Image
} from 'react-native';

class ScreenOne extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");
    return (
      <View style={styles.container}>

        <Image source={require('../static/Childrens-Advocacy-Center.jpg')} style={{width: '10%', height: '10%', flex: 1}}/>
        <ImageBackground source={require('../static/purplehex.jpg')} style={{width: '100%', height: '100%'}}>
        <TouchableHighlight
          onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})}
          style={styles.button}>
       
        <Text style={styles.buttonText}>Tap To Begin</Text>
        
        </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    flex: 1,
    alignSelf: "stretch",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    alignSelf: "center"
  }
});
export default ScreenOne;
