import React, { Component } from "react";
import { Linking } from "react-native";

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  Button
} from "react-native";

class ScreenThree extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);

    this.state = {
      apps: [
        {
          id: 1,
          name: "Baby Drums"
        },
        {
          id: 2,
          name: "Bubble Paint Pop"
        },
        {
          id: 3,
          name: "Can You Escape?"
        },
        {
          id: 4,
          name: "Doc McStuffins Baby"
        }
      ]
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome ${navigation.state.params.screen}`
  });

  handlePress() {
    Linking.openURL("https://apps.apple.com");
    this.props.onPress && this.props.onPress();
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../static/purplehex.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <Text style={styles.titleText}>{params.screen}</Text>

          <View>
            {this.state.apps.map(app => {
              return (
                <TouchableHighlight
                  style={styles.button}
                  onPress={this.handlePress}
                >
                  <Text style={styles.buttonText}>{app.name}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => openApp()}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 22
  },
  button: {
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#C56EE0",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default ScreenThree;
