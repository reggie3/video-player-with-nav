import React from 'react';
import { Header, Text } from 'native-base';

class MyHeader extends React.Component {
  render() {
    return (
      <Header
        androidStatusBarColor={'lightgray'}
        style={{ backgroundColor: 'lightblue' }}
      >
        <Text>Video Player with Nav Test</Text>
      </Header>
    );
  }
}

export default MyHeader;
