import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';
import ScreenFour from './screens/ScreenFour';

const App = createStackNavigator({
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree},
    ScreenFour: {screen: ScreenFour},
})

export default createAppContainer(App);