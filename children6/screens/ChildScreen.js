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
import { ScrollView } from "react-native-gesture-handler";

class ScreenThree extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);

    this.state = {
      apps: [
        {
          id: 1,
          name: "Baby Drums",
          category: "kids",
          url:
            "https://apps.apple.com/us/app/babies-drums-kit-colorful/id782065988"
        },
        {
          id: 2,
          name: "Barbie",
          category: "kids",
          url:
            "https://apps.apple.com/us/app/barbie-dreamhouse-adventures/id1296796112"
        },
        {
          id: 3,
          name: "Bike Race",
          category: "teens",
          url:
            "https://apps.apple.com/us/app/bike-race-free-style-games/id510461758"
        },
        {
          id: 4,
          name: "Bubble Paint Pop",
          category: "kids",
          url: "https://apps.apple.com/us/app/baby-bubble-pop/id1143962054"
        },
        {
          id: 5,
          name: "Coloring Book",
          category: "kids",
          url:
            "https://apps.apple.com/us/app/coloring-book-for-fun/id1456652693"
        },
        {
          id: 6,
          name: "Doc McStuffins Baby Nursery",
          category: "kids",
          url:
            "https://apps.apple.com/us/app/doc-mcstuffins-baby-nursery/id1187114038"
        },
        {
          id: 7,
          name: "Elmo ABCs Lite",
          category: "kids",
          url: "https://apps.apple.com/us/app/elmo-loves-abcs-lite/id427847605"
        },
        {
          id: 8,
          name: "Flow Free",
          category: "teens",
          url: "https://apps.apple.com/us/app/flow-free/id526641427"
        },
        {
          id: 9,
          name: "Glow Lamp",
          category: "relax",
          url: "https://apps.apple.com/us/app/glow-lamp/id967821302"
        },
        {
          id: 10,
          name: "Go Particles",
          category: "relax",
          url: "https://apps.apple.com/us/app/go-particles/id1010351471"
        },
        {
          id: 11,
          name: "Hangman",
          category: "teens",
          url: "https://apps.apple.com/us/app/hangman/id327449554"
        },
        {
          id: 12,
          name: "Helix Jump",
          category: "teens",
          url: "https://apps.apple.com/us/app/helix-jump/id1345968745"
        },
        {
          id: 13,
          name: "Magic Fingers",
          category: "relax",
          url: "https://apps.apple.com/us/app/magic-fingers-lite/id498870471"
        },
        {
          id: 14,
          name: "Nail Salon",
          category: "teens",
          url: ""
        },
        {
          id: 15,
          name: "Relax Melodies",
          category: "relax",
          url:
            "https://apps.apple.com/us/app/relax-melodies-sleep-sounds/id314498713"
        },
        {
          id: 16,
          name: "Sonic Dash",
          category: "teens",
          url: "https://apps.apple.com/us/app/sonic-dash/id582654048"
        },
        {
          id: 17,
          name: "Subway Surfer",
          category: "teens",
          url: "https://apps.apple.com/us/app/subway-surfers/id512939461"
        },
        {
          id: 18,
          name: "TicTacToe",
          category: "teens",
          url: ""
        },
        {
          id: 19,
          name: "Word Search",
          category: "teens",
          url: "https://apps.apple.com/us/app/word-search/id1357802596"
        }
      ]
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Chicage Children's Advocacy Center`
  });

  handlePress() {
    Linking.openURL("https://apps.apple.com");
    this.props.onPress && this.props.onPress();
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../static/purplehex.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <Text style={styles.titleText}>{params.screen}</Text>

          <View>
            {this.state.apps.map(app => {
              return (
                <TouchableHighlight
                  key={app.key}
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
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    //flexDirection: "row",
   // alignItems: "center",
   // justifyContent: "center"
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
    backgroundColor: "#c5d663",
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
