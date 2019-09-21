import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Linking
} from 'react-native';

class ParentScreen extends Component {
  static navigationOptions = {
    title: "Chicage Children's Advocacy Center"
  }

    
    render(){func = () => { Linking.openURL("http://167.99.56.53/verify");}
    return null;}
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#C56EE0',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center'
  }
});
export default ParentScreen;