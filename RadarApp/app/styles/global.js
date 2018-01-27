import React, {StyleSheet} from "react-native";

import colors from './colorscheme';

var global = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: 'transparent',
        backgroundColor: '#000080',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    secondaryContainer_wFlex: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingHorizontal:15,
        alignSelf: 'stretch',
        backgroundColor: '#0000FF',
        marginVertical: 5,
    },

    secondaryContainer_woFlex: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingHorizontal:15,
        alignSelf: 'stretch',
        backgroundColor: '#00FFFF',
        marginVertical: 5,
    },

    verticalButtonContainer: {
        // flex: 1,
        // backgroundColor: 'transparent',
        flexDirection: 'column',
        backgroundColor: '#0000FF',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:25,
        paddingVertical: 15,
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
        // margin: 10,
        backgroundColor: 'transparent',

    },

    secondaryHeadingText: {
        fontSize: 20,
        color: colors.headingColor,
        textAlign: 'left',
        // margin: 10,
        backgroundColor: 'transparent',
    },
    tertiaryHeadingText: {
        fontSize: 15,
        color: colors.textColor,
        backgroundColor: '#008000',
        textAlign: 'left',
        margin: 10,
        backgroundColor: 'transparent',
    },

    text: {
        textAlign: 'center',
        color: colors.textColor,
        backgroundColor:'#008000',
        marginBottom: 10,
        // backgroundColor: 'transparent',
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