import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Linking,
  ImageBackground
} from 'react-native';

class ScreenThree extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome ${navigation.state.params.screen}`
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../static/purplehex.jpg')} style={{width: '100%', height: '100%'}}>
        <Text style={styles.titleText}>{params.screen}</Text>
        
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => openApp()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22
  },
  button: {
    alignSelf: 'stretch',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#C56EE0',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center'
  }
})

export default ScreenThree;