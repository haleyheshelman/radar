import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ImageBackground,
  TextInput
} from 'react-native';

import styles from './../styles/style';

import StandardButton from "./../components/StandardButton/StandardButton";


// const text = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

class Login extends Component {

    // static navigationOptions = {
    //     title: "Unecessary title, remove"
    // }

  render() {
    const {navigate} = this.props.navigation;
    this.state = {text: 'Username'};
    this.state2 = {text: 'Password'};
      return (
      <View style={styles.global.mainContainer}>
        <ImageBackground source={require('./../images/bg2.png')}
          style={styles.global.mainContainer}>

          <Image source={require('./../images/rose_r_placeholder.png')}
          style={styles.global.logo}/>
          <Text style={styles.global.heading}>
            Welcome to RADAR!
          </Text>
          <Text style={styles.global.text}>
            Please log in using your Kerberos username and password.
          </Text>
          <TextInput style={styles.global.textInput}
                     placeholder="Username"
                     onChangeText={(text) => this.setState({text})}
                     value = {this.state.text}
          />
          <TextInput style={styles.global.textInput}
                     placeholder="Password"
                     onChangeText={(text) => this.setState({text})}
                     value = {this.state2.text}
          />
          <StandardButton text="Submit" onPress={() => navigate('DutyLanding')}/>


        </ImageBackground>
      </View>
    );
  }
}

export default Login;