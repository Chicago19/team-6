import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Constants,
  ImageBackground
} from 'react-native';

class ScreenTwo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome to ChicagoCAC`,
    }
  };
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.titleText}>Please Select One</Text>
        <TouchableHighlight
          onPress={() => navigate("ParentScreen", { screen: "Parent Screen" })}
          style={[styles.button, { backgroundColor: '#c5d663' }]}>
            <Text style={styles.buttonText}>Parent</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => navigate("ChildScreen", { screen: "Child Screen" })}
          style={[styles.button, { backgroundColor: '#c5d663' }]}>
          <Text style={styles.buttonText}>Child</Text>
        </TouchableHighlight>
      </View>
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
    height: 40,
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