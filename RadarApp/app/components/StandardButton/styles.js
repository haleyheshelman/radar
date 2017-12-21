import {StyleSheet} from 'react-native';
import colors from '../../config/colorscheme';

export default StyleSheet.create({
    standardButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    standardButton: {
        backgroundColor: '#ffff00',
    },

    standardButtonText: {
        textAlign: 'center',
        paddingVertical: 15,
        paddingHorizontal: 40,
        color: '#fff',
        fontSize: 16,
        //fontWeight: 500,
    },
});