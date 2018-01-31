import React, {PropTypes} from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from './styles';

const DutyWeekComponent = ({week, day1, day2}) => { //here name is an object
    const week = week.toString();

    return (
        <View style = {styles.dutyWeekComponentContainer}>
            <Text style={styles.dutyDayCard}>{week}</Text>
        </View>
    )

};

export default DutyWeekComponent;