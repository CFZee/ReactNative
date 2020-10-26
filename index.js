import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/Nav';
import SplashScreen from './src/Screens/SplashScreen';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'SplashScreen' };
    console.log('Start doing some tasks for about 3 seconds')
    setTimeout(() => {
      console.log('Done some tasks for about 3 seconds')
      this.setState({ currentScreen: 'App' })
    }, 2000)
  }
  render() {
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <App />
    return mainScreen
  }
}


AppRegistry.registerComponent("gcf.igcw", () => Main)
