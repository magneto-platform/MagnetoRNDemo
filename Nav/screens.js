import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import {
  View, 
  ActivityIndicator, 
  StatusBar, 
} from 'react-native';
import React from 'react';

import VerifyScreen from '../src/Auth/verify';


class AuthNav extends React.Component {
  render() {
    return (
        <View style={{backgroundColor:'blue'}}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
    );
  }
}
const HomeStack = createStackNavigator();

function Navigators() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home" headerMode="none" >
        <HomeStack.Screen name="Home" component={VerifyScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}


export default Navigators;

