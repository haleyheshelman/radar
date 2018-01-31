import {StyleSheet,} from 'react-native';
import colors from '../../styles/colorscheme';

export default StyleSheet.create({
    standardButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop:10,

    },

    standardButton: {
        backgroundColor: colors.background,

    },
    standardButtonText: {
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: '#fff',
        fontSize: 16,

    },
});