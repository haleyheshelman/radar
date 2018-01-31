import React, {StyleSheet} from "react-native";

import colors from './colorscheme';

var global = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    secondaryContainer: {
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingHorizontal:15,
        paddingVertical:5,
        alignSelf: 'stretch',
        marginVertical: 5,
        backgroundColor: '#FFFFFF10',
    },

    verticalButtonContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },

    logo: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    heading: {
        fontSize: 30,
        color: colors.headingColor,
        textAlign: 'left',
        backgroundColor: 'transparent',

    },

    secondaryHeadingText: {
        fontSize: 20,
        color: colors.headingColor,
        textAlign: 'left',
        backgroundColor: 'transparent',

    },
    tertiaryHeadingText: {
        fontSize: 15,
        color: colors.textColor,
        textAlign: 'left',
        backgroundColor: 'transparent',
    },

    text: {
        textAlign: 'center',
        color: colors.textColor,
        marginBottom: 10,
    },
    textInput:{
        height: 35,
        borderWidth:1,
        color: colors.textColor,
        marginVertical: 5,
        paddingHorizontal:20,
        backgroundColor: '#FFFFFF20',
    }
});



module.exports = global;