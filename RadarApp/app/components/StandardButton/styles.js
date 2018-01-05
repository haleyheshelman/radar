import {StyleSheet,} from 'react-native';
import colors from '../../styles/colorscheme';

export default StyleSheet.create({
    standardButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    standardButton: {
        backgroundColor: colors.background,

    },
    standardButtonText: {
        textAlign: 'center',
        paddingVertical: 15,
        paddingHorizontal: 40,
        color: '#fff',
        fontSize: 16,
    },
});