/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  View
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./app/images/background.png')}
          style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to RADAR!
        </Text>
        <Text style={styles.instructions}>
          Please log in using your Kerberos username and password.
        </Text>
        {/*TODO: Add stack navigation and link this screen to DutyLanding */}
        {/* <Text style={styles.instructions}>
          {instructions}
        </Text> */}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({ //TODO: Move this shiz outta here
  container: {
      flex: 1,
      height: undefined,
      width: undefined,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'transparent',
  },
  logo: {
    width: 400,
    height: 400,
      backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
      backgroundColor: 'transparent',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
      backgroundColor: 'transparent',
  },
});
