import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Constants,
  ImageBackground,
  Image,
  Linking
} from 'react-native';

class ScreenTwo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `CCAC Family Portal`,
    }
  };
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../static/purplehex.jpg')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() =>{Linking.openURL("http://167.99.56.53/verify")}}
              style={[styles.button, { backgroundColor: '#c5d663' }]}>
              <Text style={styles.buttonText}>Parent</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigate("ChildScreen", { screen: "Child Screen" })}
              style={[styles.button, { backgroundColor: '#c5d663' }]}>
              <Text style={styles.buttonText}>Child</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: "10%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenTwo;