import React, {PropTypes} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';

const CallIcon = () => (
    <View style = {styles.iconContainer}>
        <Icon
            name='phone'
            color='#517fa4'
            onPress={() => console.log('calling person!')}
        />
    </View>
);


export default CallIcon;
