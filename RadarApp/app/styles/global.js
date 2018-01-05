import React, {StyleSheet} from "react-native";

import colors from './colorscheme';

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
    heading: {
        fontSize: 20,
        color: colors.headingColor,
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'transparent',
    },
    text: {
        textAlign: 'center',
        color: colors.textColor,
        marginBottom: 15,
        backgroundColor: 'transparent',
    },
});

module.exports = global;