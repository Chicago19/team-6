import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Child from './child.js';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Child/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);