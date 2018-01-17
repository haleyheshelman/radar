import {StyleSheet} from 'react-native';
import colors from '../../styles/colorscheme';

export default StyleSheet.create({
    singleContactContainer: {
       flex:1,
        // width:50,
        // height:50,
        flexDirection:'row',
        justifyContent:'flex-start' ,

    },
    singleContact: {
        flex:1,
        // width:50,
        // height:50,
        flexDirection: 'row',
        color: colors.textColor,

    },
});