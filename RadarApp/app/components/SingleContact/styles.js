import {StyleSheet} from 'react-native';
import colors from '../../styles/colorscheme';

export default StyleSheet.create({
    singleContactContainer: {
       flex:1,
        // height: 100,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent: 'center',



    },
    singleContact: {
        flex:1,
        width:50,
        flexDirection: 'row',
        color: colors.textColor,
        backgroundColor: '#FFFFFF10',
        marginVertical: 3,
        paddingVertical: 2,
        alignSelf: 'stretch',
    },
});