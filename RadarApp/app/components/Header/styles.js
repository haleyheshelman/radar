import {StyleSheet} from 'react-native';
import colors from '../../styles/colorscheme';

export default StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignSelf:'stretch',
        paddingHorizontal: 15,
        paddingVertical:20,
    },

    dutyScheduleTitle: {
        color: colors.headingColor,
        fontSize: 25,
        justifyContent:'flex-start',
        alignContent:'flex-start',
    },
    hallTitle: {
        color: colors.headingColor,
        fontSize: 25,
        justifyContent:'flex-start',
        alignContent:'flex-start',
    },
    icon: {
        width: 100,
        height: 100,
        marginHorizontal: 15,
        backgroundColor: 'transparent',
    }
});