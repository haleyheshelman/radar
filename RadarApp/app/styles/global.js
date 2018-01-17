import React, {StyleSheet} from "react-native";

import colors from './colorscheme';

var global = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    secondaryContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingHorizontal:25,
        alignSelf: 'stretch',
    },

    verticalButtonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:25,
        paddingVertical: 15,
    },

    logo: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        color: colors.headingColor,
        textAlign: 'left',
        margin: 10,
        backgroundColor: 'transparent',
    },

    secondaryHeading: {
        fontSize: 20,
        color: colors.headingColor,
        textAlign: 'left',
        margin: 10,
        backgroundColor: 'transparent',
    },
    text: {
        textAlign: 'center',
        color: colors.textColor,
        marginBottom: 10,
        backgroundColor: 'transparent',
    },

    textInput:{
        height: 35,
        borderWidth:1,
        backgroundColor: colors.background,
        color: colors.textColor,
        marginVertical: 5,
        paddingHorizontal:20,
    }
});

module.exports = global;