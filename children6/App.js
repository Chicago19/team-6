import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ChildScreen from './screens/ChildScreen';
import ParentScreen from './screens/ParentScreen';

const App = createStackNavigator({
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo},
    ChildScreen: {screen: ChildScreen},
    ParentScreen: {screen: ParentScreen},
})

export default createAppContainer(App);