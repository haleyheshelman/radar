import {StyleSheet} from 'react-native';
import colors from '../../styles/colorscheme';

export default StyleSheet.create({
    headerContainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent:'flex-start',
        alignItems:'center',
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
        paddingHorizontal: 15,
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