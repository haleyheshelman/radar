import {StyleSheet} from 'react-native';
import colors from '../../styles/colorscheme';

export default StyleSheet.create({
    singleContactContainer: {
       // flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent: 'center',
        backgroundColor: '#FFFFFF10',


    },
    singleContact: {
        flex:1,
        flexDirection: 'row',
        color: colors.textColor,
        marginVertical: 3,
        paddingVertical: 2,
        paddingHorizontal: 5,
        alignSelf: 'stretch',
    },
});