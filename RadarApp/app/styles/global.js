import React, {StyleSheet} from "react-native";

var global = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
  welcome: {
    fontSize: 20,
      color: '#800000',
    textAlign: 'center',

    margin: 10,
      backgroundColor: 'transparent',
  },
  instructions: {
    textAlign: 'center',
    color: '#797979',
    marginBottom: 15,
      backgroundColor: 'transparent',
  },
});

module.exports = global;