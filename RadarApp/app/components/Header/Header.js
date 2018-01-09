import React, {PropTypes} from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from './styles';

const Header = ({headerText, hall, floor}) => { //here name is an object
    const img = "get some kinda icon????";

    return (
        <View style = {styles.headerContainer}>
            <View>
                <Image style={styles.icon} source={require('./../../images/rose_r_placeholder.png')}/>
            </View>
            <View>
                <Text style={styles.dutyScheduleTitle}>{headerText}</Text>
                <Text style={styles.hallTitle}>{hall} {floor}</Text>     
            </View>
        </View>
    )
};

export default Header;