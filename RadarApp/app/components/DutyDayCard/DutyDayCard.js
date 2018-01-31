import React, {PropTypes} from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from './styles';

// import {CallIcon} from '../CallIcon';

const DutyDayCard = ({date, day}) => { //here name is an object
    const date = date.toString();
    const day = day.toString();

    return (
        <View style = {styles.dutyDayCardContainer}>
            <Text style={styles.dutyDayCard}>{date}</Text>
            <Text style={styles.dutyDayCard}>{day}</Text>
        </View>
    )

};
export default DutyDayCard;