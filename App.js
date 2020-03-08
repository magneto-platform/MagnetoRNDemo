
import React from 'react';
import { View, Text } from 'react-native';
import AppNav from './Nav/screens';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppNav />
    );
  }
}

export default App;