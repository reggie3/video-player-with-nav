import React from 'react';


import VideoScreen from './VideoScreen'
import IntroScreen from './IntroScreen'
// 
import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator({
  IntroScreen: {
    screen: IntroScreen
  },
  VideoScreen: {
    screen: VideoScreen
  },
},
{
  initialRouteName: 'VideoScreen',
  navigationOptions: {
  header: null
  }
});

export default class App extends React.Component {
  

  render = () => {
    return (
      <RootStack />
    );
  };
}


