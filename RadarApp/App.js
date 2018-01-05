/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
    ImageBackground,
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
      <View
          style={styles.global.mainContainer}
      >
        <ImageBackground source={require('./app/images/bg2.png')}
          style={styles.global.mainContainer}
            >
        <Image
            source={require('./app/images/rose_r_placeholder.png')}
        style={styles.global.logo}
        />
        <Text
            style={styles.global.welcome}
        >
          Welcome to RADAR!
        </Text>
        <Text
            style={styles.global.instructions}
        >
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

import styles from './app/styles/style';


