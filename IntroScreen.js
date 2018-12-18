import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';
import { withNavigation } from 'react-navigation';

const random_rgba = () => {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
};
const BACKGROUND_COLOR = random_rgba();

class IntroScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: `${BACKGROUND_COLOR}`
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Intro Screen</Text>
        </View>
        <Button
          style={{ margin: 10 }}
          onPress={() => {
            this.props.navigation.navigate('VideoScreen');
          }}
        >
          <Text>Go to VideoScreen</Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(IntroScreen);
