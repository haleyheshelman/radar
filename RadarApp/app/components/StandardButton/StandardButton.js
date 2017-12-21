import React, {PropTypes} from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import styles from './styles';

const StandardButton = ({text, onPress}) => (
    <View style = {styles.standardButtonContainer}>
        <TouchableOpacity
            onPress={onPress}
            style={styles.standardButton}
            >
            <Text style = {styles.standardButtonText}>{text}</Text>

        </TouchableOpacity>
    </View>
);

// StandardButton.PropTypes = { //basic typechecking
//     text: PropTypes.string,
//     onPress: PropTypes.func,
// };

export default StandardButton;
